import React, { useState } from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <div>
        <h3>Nome de usuario</h3>
        <input
          type="text"
          placeholder="Nome de usuario"
          value={username}
          onChange={(e) => setUsername}
        />
      </div>
      <div>
        <h3>Senha</h3>
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail}
        />
      </div>
      <button type="submit" onClick={handleRegister}>
        Confirma registro
      </button>
      <button>
        <Link to="/">Voltar tela de login</Link>
      </button>
    </form>
  );
}
