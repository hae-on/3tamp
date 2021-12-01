import React from "react";
import styles from "./main.module.css";
import Snow from "../snow/snow";

const Main = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Snow />
        <button className={styles.start_btn}>🧡 💛 3tamp 시작하기 💛 🧡</button>
      </div>
    </div>
  );
};

export default Main;
