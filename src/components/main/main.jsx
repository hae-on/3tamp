import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./main.module.css";
import Snow from "../snow/snow";

const Main = (props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Snow />
        <button className={styles.start_btn} onClick={onClick}>
          🧡 💛 3tamp 시작하기 💛 🧡
        </button>
      </div>
    </div>
  );
};

export default Main;
