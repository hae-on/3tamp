import React from "react";
import styles from "./hardMode.module.css";
import btn from "../../img/logo.png";
import AddButton from "../addButton/addButton";
import HardModeBox from "../hardModeBox/hardModeBox";

const HardMode = () => {
  return (
    <>
      <HardModeBox />
      <AddButton />
    </>
  );
};

export default HardMode;
