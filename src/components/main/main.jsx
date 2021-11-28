import React from "react";
import styles from "./main.module.css";
import bg from "../../img/3tamp_bg.jpg";

const Main = (props) => {
  return (
    <div className={styles.background}>
      <img src={bg} alt="bg" className={styles.bg} />
    </div>
  );
};

export default Main;
