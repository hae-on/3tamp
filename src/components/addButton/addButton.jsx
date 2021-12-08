import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "./addButton.module.css";

const AddButton = (props) => {
  return (
    <>
      <button className={styles.btn}>
        <AiFillPlusCircle className={styles.add} />
      </button>
    </>
  );
};

export default AddButton;
