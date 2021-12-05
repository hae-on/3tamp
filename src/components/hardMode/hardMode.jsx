import React from "react";
import Nav from "../nav/nav";

const HardMode = ({ authService }) => {
  return (
    <>
      <Nav authService={authService} />
      <h1>hard mode</h1>
    </>
  );
};

export default HardMode;
