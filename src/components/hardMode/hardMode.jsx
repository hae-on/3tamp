import React, { useState } from "react";
import styles from "./hardMode.module.css";
import AddButton from "../addButton/addButton";
import HardModeBox from "../hardModeBox/hardModeBox";

const HardMode = () => {
  const [hardBoxes, setHardBoxes] = useState([
    {
      id: "1",
      title: "html 공부하기",
      color: "red",
    },
    {
      id: "2",
      title: "영어 단어 외우기",
      color: "purple",
    },
    {
      id: "3",
      title: "책 읽기",
      color: "orange",
    },
  ]);

  return (
    <>
      <div className={styles.boxes}>
        {hardBoxes.map((hardBox) => (
          <HardModeBox hardBox={hardBox} />
        ))}
      </div>

      <AddButton hardBoxes={hardBoxes} />
    </>
  );
};

export default HardMode;
