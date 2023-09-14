import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
    }
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao Dashboard</h1>
      {userInfo && <p>Usuário logado: {userInfo.displayName}</p>}
      <img src={userInfo.photoURL} alt={`Foto de ${userInfo.displayName}`} />
    </div>
  );
}
