import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuth } from "./authContext";
import { auth2 } from "./firebase";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth2,
        email,
        password
      );

      const user = userCredential.user;

      // Atualiza o perfil do usuário com o nome de usuário
      await updateProfile(user, { displayName: username });

      // Agora, você pode adicionar o nome de usuário ao seu banco de dados se desejar.
      // Exemplo de como adicionar ao localStorage:
      const userInfo = { displayName: username, email: user.email };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      console.log("Usuário registrado com sucesso:", user);
    } catch (error) {
      console.error("Erro ao registrar:", error);
    }
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
