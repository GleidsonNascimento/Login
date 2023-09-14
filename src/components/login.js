import React, { useState } from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import { useAuth } from "./authContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./login.css";
import { auth2 } from "./firebase";

export default function LoginForm({ togglePage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useAuth();

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth2, provider)
      .then((result) => {
        console.log(result);
        const user = result.user;
        localStorage.setItem("userInfo", JSON.stringify(user));
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = { username, password };
      await login(userData);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="background">
      <form className="form-login" onSubmit={HandleLogin}>
        <div>
          <h3>Nome de usuario</h3>
          <input
            type="text"
            placeholder="nome do usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <h3>Senha do usuario</h3>
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
