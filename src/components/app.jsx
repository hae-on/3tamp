import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/main";
import Home from "./home/home";
import "./app.module.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
