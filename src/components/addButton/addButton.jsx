import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "./addButton.module.css";
import AddBox from "../addBox/addBox";

const AddButton = ({ addBox }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button onClick={modalClose} className={styles.btn}>
        <AiFillPlusCircle className={styles.add_icon} />
      </button>
      {modalOpen && <AddBox onAdd={addBox} modalClose={modalClose} />}
    </>
  );
};

export default AddButton;
