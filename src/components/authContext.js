import React, { createContext, useContext, useState } from "react";
import {
  registerWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = async (email, password) => {
    try {
      const user = await registerWithEmailAndPassword(email, password);
      setUser(user);
    } catch (error) {
      console.error("Erro ao registrar:", error);
    }
  };

  const login = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(email, password);
      setUser(user);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
