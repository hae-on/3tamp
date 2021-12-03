import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goToMain = (userId) => {
    navigate("/home", { state: { id: userId } });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      //.then(console.log());
      .then((data) => goToMain(data.user.uid));
  };

  return <button onClick={onLogin}>Google</button>;
};

export default Login;
