import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./login";
import Register from "./Register";

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
