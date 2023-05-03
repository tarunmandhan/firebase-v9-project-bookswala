import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";

//css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
