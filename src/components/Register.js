import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { useAuth } from "./authContext";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = { username, password, email };
    register(userData);
  };

  return (
    <div className="background">
      <form className="form-register">
        <div>
          <h3>Nome de usuário</h3>
          <input
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <h3>Senha</h3>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <h3>Email</h3>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="button-register">
          <button type="submit" onClick={handleRegister}>
            Confirmar registro
          </button>
          <button>
            <Link to="/">Voltar para a tela de login</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
