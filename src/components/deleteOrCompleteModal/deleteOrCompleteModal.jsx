import React from "react";
import styles from "./deleteOrCompleteModal.module.css";
import { FaTimes } from "react-icons/fa";

const DeleteOrCompleteModal = ({ modalClose }) => {
  return (
    <div className={styles.container} onClick={modalClose}>
      <div className={styles.modal}>
        <button className={styles.close_btn} onClick={modalClose}>
          <FaTimes className={styles.x} />
        </button>
      </div>
    </div>
  );
};
export default DeleteOrCompleteModal;
