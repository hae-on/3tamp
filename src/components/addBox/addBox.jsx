import React, { useRef, useState } from "react";
import styles from "./addBox.module.css";
import { FaTimes } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import ColorBox from "../colorBox/colorBox";

const AddBox = ({ modalClose, onAdd, onA }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const formRef = useRef("");
  const titleRef = useRef();

  const today = Date();

  // 오늘 날짜 받아오기
  const onSubmit = async (event) => {
    event.preventDefault();
    const box = {
      id: Date.now(),
      title: titleRef.current.value || "",
      color: color || "red",
      startDate: today,
      isClicked: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false,
        18: false,
        19: false,
        20: false,
      },
    };
    formRef.current.reset();
    onAdd(box);
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
