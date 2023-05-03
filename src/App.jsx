import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import MyNavbar from "./components/Navbar";

//pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import ListingPage from "./pages/List";

//css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/list" element={<ListingPage />} />
      </Routes>
    </>
  );
};

export default App;
