import React, { useState } from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import "./login.css";

export default function LoginForm({ togglePage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="background">
      <form className="form-login">
        <div>
          <h3>Nome de usuario</h3>
          <input
            type="text"
            placeholder="nome do usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <h3>Senha do usuario</h3>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button type="submit" onClick={HandleLogin}>
            Login
          </button>
          <button>
            <Link to="/register">registrar</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
