import React from "react";
import styles from "./modal.module.css";
import { FaTimes } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import ColorBox from "../colorBox/colorBox";

const Modal = ({ modalClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <span className={styles.intro}>새로운 습관을 만들어볼까요?</span>
        <button onClick={modalClose} className={styles.close_btn}>
          <FaTimes className={styles.x} />
        </button>
        <form className={styles.form}>
          <div className={styles.title}>
            <label>제목 </label>
            <input
              type="text"
              className={styles.title_input}
              maxLength="15"
            ></input>
          </div>
          <div className={styles.color}>
            <label className={styles.color_label}>색상 </label>
            <ColorBox />
          </div>
          <button type="submit" className={styles.check_btn}>
            <AiFillCheckCircle className={styles.check} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
