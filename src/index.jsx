import React from "react";
import ReactDOM from "react-dom";
import { firebaseApp } from "./service/firebase";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app.jsx";
import "./index.css";
import AuthService from "./service/auth_service";
import BoxRepository from "./service/box_repository";

const authService = new AuthService(firebaseApp);
const boxRepository = new BoxRepository();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} boxRepository={boxRepository} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
