import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/main";
import Home from "./home/home";
import Login from "./login/login";
import HardMode from "./hardMode/hardMode";
import SoftMode from "./softMode/softMode";
import Collection from "./collection/collection";
import "./app.module.css";

function App({ authService }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login authService={authService} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hard_mode" element={<HardMode />} />
        <Route path="/soft_mode" element={<SoftMode />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
