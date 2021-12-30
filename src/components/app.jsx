import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router";
import Main from "./main/main";
import Home from "./home/home";
import Login from "./login/login";
import HardMode from "./hardMode/hardMode";
import SoftMode from "./softMode/softMode";
import Nav from "./nav/nav";
import "./app.module.css";

function App({ authService, boxRepository }) {
  let location = useLocation();

  return (
    <>
      {location.pathname === "/" || location.pathname === "/login" ? null : (
        <Nav authService={authService} />
      )}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<Login authService={authService} />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/hardMode"
          element={
            <HardMode authService={authService} boxRepository={boxRepository} />
          }
        />
        <Route
          path="/softMode"
          element={
            <SoftMode authService={authService} boxRepository={boxRepository} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
