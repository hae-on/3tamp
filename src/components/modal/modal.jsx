import React from "react";
import styles from "./modal.module.css";
import { FaTimes } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";

const Modal = ({ modalClose }) => {
  return (
    <div className={styles.modal}>
      <span className={styles.intro}>새로운 습관을 만들어볼까요?</span>
      <button onClick={modalClose} className={styles.close_btn}>
        <FaTimes className={styles.x} />
      </button>
      <form className={styles.form}>
        <div className={styles.title}>
          <label>제목 </label>
          <input type="text" className={styles.title_input}></input>
        </div>
        <div className={styles.color}>
          <label>색상 </label>
          <input type="color"></input>
        </div>
        {/* <input type="submit"></input> */}
        <button type="submit" className={styles.check_btn}>
          <AiFillCheckCircle className={styles.check} />
        </button>
      </form>
    </div>
  );
};

export default Modal;
