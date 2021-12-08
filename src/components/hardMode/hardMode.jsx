import React from "react";
import styles from "./hardMode.module.css";
import btn from "../../img/logo.png";
import AddButton from "../addButton/addButton";

const HardMode = () => {
  const color = [
    "#ff98a5",
    "#ffdcb0",
    "#fff88d",
    "#b9ffbd",
    "#ace8ff",
    "#d4b4ff",
    "#ffd1d5",
  ];

  const getRandomColor = () => {
    return color[Math.floor(Math.random() * color.length)];
  };

  return (
    <>
      <div
        className={styles.box}
        style={{
          background: getRandomColor(color),
        }}
      >
        <div className={styles.head}>
          <form>
            <input
              className={styles.title}
              type="text"
              placeholder="제목을 입력해주세요"
              maxLength="15"
            ></input>
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
      <AddButton />
    </>
  );
};

export default HardMode;
