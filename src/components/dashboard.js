import React, { useEffect, useState } from "react";
import { useAuth } from "./authContext";

export default function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);
  const { logout } = useAuth();

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    logout();
  };

  return (
    <div>
      <h1>Bem-vindo ao Dashboard</h1>
      {userInfo && userInfo.displayName && (
        <p>Usuário logado: {userInfo.displayName}</p>
      )}
      {userInfo && userInfo.photoURL && (
        <img src={userInfo.photoURL} alt={`Foto de ${userInfo.displayName}`} />
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
