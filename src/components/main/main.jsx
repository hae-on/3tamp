import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./main.module.css";
import Snow from "../snow/snow";

const Main = (props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Snow />
        <button className={styles.start_btn} onClick={onClick}>
          π§‘ π 3tamp μμνκΈ° π π§‘
        </button>
      </div>
    </div>
  );
};

export default Main;
