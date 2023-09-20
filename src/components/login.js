import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./authContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./login.css";
import { auth2 } from "./firebase";

export default function LoginForm({ togglePage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useAuth();

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth2, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("userInfo", JSON.stringify(user));
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      await login(userData);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="background">
      <form className="form-login" onSubmit={handleLogin}>
        <div>
          <h3>Email</h3>
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <h3>Senha</h3>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="buttons">
          <button type="submit">Login</button>
          <div className="logo">
            <img
              onClick={handleGoogleSignIn}
              src="https://th.bing.com/th/id/OIP.41X9Zlf6K7F_sreiW_KongAAAA?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
          <p className="link">
            <Link to="/register">Registrar</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
