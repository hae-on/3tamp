import React from "react";
import styles from "./modal.module.css";
import { FaTimes } from "react-icons/fa";

const Modal = ({ modalClose }) => {
  return (
    <div className={styles.modal}>
      <button onClick={modalClose} className={styles.close_btn}>
        <FaTimes className={styles.x} />
      </button>
    </div>
  );
};

export default Modal;
