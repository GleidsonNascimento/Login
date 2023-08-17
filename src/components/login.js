import React, { useState } from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

export default function LoginForm({ togglePage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <input
        type="text"
        placeholder="nome do usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={HandleLogin}>
        Login
      </button>
      <button>
        <Link to="/register">registrar</Link>
      </button>
    </form>
  );
}
