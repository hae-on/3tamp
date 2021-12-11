import React, { useState } from "react";
import styles from "./hardModeBox.module.css";
import btn from "../../img/logo.png";

const HardModeBox = ({ hardBox }) => {
  const { title, color } = hardBox;
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className={`${styles.box} ${getStyles(color)}`}>
        <div className={styles.head}>
          <form>
            <h1 className={styles.title}> {title} </h1>
          </form>
          <button className={styles.btn}>
            <img src={btn} alt="btn" className={styles.btn_img} />
          </button>
        </div>
        <table border="2" className={styles.table}>
          <thead>
            <tr>
              <td
                className={clicked ? styles.hard_o : null}
                onClick={onClick}
              ></td>
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

function getStyles(color) {
  switch (color) {
    case "red":
      return styles.red;
    case "orange":
      return styles.orange;
    case "yellow":
      return styles.yellow;
    case "green":
      return styles.green;
    case "blue":
      return styles.blue;
    case "purple":
      return styles.purple;
    case "pink":
      return styles.pink;
    default:
      throw new Error(`unknown color: ${color}`);
  }
}

export default HardModeBox;
