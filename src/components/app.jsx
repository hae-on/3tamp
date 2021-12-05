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
        <Route path="/home" element={<Home authService={authService} />} />
        <Route
          path="/hardMode"
          element={<HardMode authService={authService} />}
        />
        <Route
          path="/softMode"
          element={<SoftMode authService={authService} />}
        />
        <Route
          path="/collection"
          element={<Collection authService={authService} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
