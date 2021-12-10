import React from "react";
import styles from "./hardModeBox.module.css";
import btn from "../../img/logo.png";

const HardModeBox = ({ hardBox }) => {
  //   const { title, color } = hardBox;
  const color = [
    { key: "red", value: "#ff98a5" },
    { key: "orenge", value: "#ffdcb0" },
    { key: "yellow", value: "#fff88d" },
    { key: "green", value: "#b9ffbd" },
    { key: "blue", value: "#ace8ff" },
    { key: "purple", value: "#d4b4ff" },
    { key: "pink", value: "#ffd1d5" },
  ];

  // const getRandomColor = () => {
  //   return color[Math.floor(Math.random() * color.length)];
  // };

  return (
    <>
      <div
        className={styles.box}
        style={{
          background: "pink",
        }}
      >
        <div className={styles.head}>
          <form>
            <h2 className={styles.title}> {hardBox.title} </h2>
          </form>
          <button className={styles.btn}>
            <img src={btn} alt="btn" className={styles.btn_img} />
          </button>
        </div>
        <table border="2" className={styles.table}>
          <thead>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default HardModeBox;
