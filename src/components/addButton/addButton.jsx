import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "./addButton.module.css";
import Modal from "../modal/modal";

const AddButton = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button onClick={modalClose} className={styles.btn}>
        <AiFillPlusCircle className={styles.add_icon} />
      </button>
      {modalOpen && <Modal modalClose={modalClose}></Modal>}
    </>
  );
};

export default AddButton;
