import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import RegisterPage from "./pages/Register";

//css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<h1>Login page</h1>} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
