import React from "react";
import styles from "./hardMode.module.css";
import btn from "../../img/logo.png";

const HardMode = () => {
  return (
    <>
      <div className={styles.box}>
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
    </>
  );
};

export default HardMode;
