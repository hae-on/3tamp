import React from "react";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log);
  };
  return <button onClick={onLogin}>Google</button>;
};

export default Login;
