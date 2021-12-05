import React from "react";
import Nav from "../nav/nav";

const Collection = ({ authService }) => {
  return (
    <>
      <Nav authService={authService} />
      <h1>collection</h1>
    </>
  );
};

export default Collection;
