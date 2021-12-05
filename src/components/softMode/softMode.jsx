import React from "react";
import Nav from "../nav/nav";

const Soft_mode = ({ authService }) => {
  return (
    <>
      <Nav authService={authService} />
      <h1>soft mode</h1>
    </>
  );
};

export default Soft_mode;
