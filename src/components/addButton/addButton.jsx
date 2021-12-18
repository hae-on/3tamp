import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "./addButton.module.css";
import AddBox from "../addBox/addBox";
import DeleteOrCompleteModal from "../deleteOrCompleteModal/deleteOrCompleteModal";

const AddButton = ({ addHardBox }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button onClick={modalClose} className={styles.btn}>
        <AiFillPlusCircle className={styles.add_icon} />
      </button>
      {modalOpen && <DeleteOrCompleteModal modalClose={modalClose} />}

      {/* //<AddBox onAdd={addHardBox} modalClose={modalClose} />} */}
    </>
  );
};

export default AddButton;
