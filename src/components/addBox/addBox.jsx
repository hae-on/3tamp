import React, { useRef, useState } from "react";
import styles from "./addBox.module.css";
import { FaTimes } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import ColorBox from "../colorBox/colorBox";
// import { dbService } from "../../service/firebase";
// import { addDoc, collection } from "@firebase/firestore";

const AddBox = ({ modalClose, onAdd }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const formRef = useRef("");
  const titleRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    const hardBox = {
      id: Date.now(),
      title: titleRef.current.value || "",
      color: color || "red",
    };
    // try {
    //   const docRef = await addDoc(collection(dbService, "box"), {
    //     title,
    //     color,
    //     createdAt: Date.now(),
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (error) {
    //   console.error("Error adding document: ", error);
    // }
    // setTitle("");
    // setColor("");
    formRef.current.reset();
    onAdd(hardBox);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTitle(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <span className={styles.intro}>새로운 습관을 만들어볼까요?</span>
        <button onClick={modalClose} className={styles.close_btn}>
          <FaTimes className={styles.x} />
        </button>
        <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
          <div className={styles.title}>
            <label>제목 </label>
            <input
              ref={titleRef}
              value={title}
              onChange={onChange}
              type="text"
              className={styles.title_input}
              maxLength="15"
            ></input>
          </div>
          <div className={styles.color}>
            <label className={styles.color_label}>색상 </label>
            <ColorBox setColor={setColor} />
          </div>
          <button type="submit" className={styles.check_btn}>
            <AiFillCheckCircle className={styles.check} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBox;
