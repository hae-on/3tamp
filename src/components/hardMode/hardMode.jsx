import React, { useState } from "react";
import styles from "./hardMode.module.css";
import AddButton from "../addButton/addButton";
import HardModeBox from "../hardModeBox/hardModeBox";

const HardMode = () => {
  const [hardBoxes, setHardBoxes] = useState([
    {
      id: "1",
      title: "html 공부하기",
      color: "red",
      startDate: new Date(2021, 11, 27),
      endDate: new Date(2021, 12, 16),
    },
    {
      id: "2",
      title: "영어 단어 외우기",
      color: "purple",
      startDate: new Date(2021, 11, 30),
      endDate: new Date(2021, 12, 19),
    },
    // {
    //   id: "3",
    //   title: "책 읽기",
    //   color: "orange",
    //   startDate: "2021. 12. 18.",
    // },
  ]);

  const addHardBox = (hardBox) => {
    const updated = [...hardBoxes, hardBox];
    setHardBoxes(updated);
  };

  return (
    <section className={styles.hardMode}>
      <div className={styles.boxes}>
        {hardBoxes.map((hardBox) => (
          <HardModeBox key={hardBox.id} hardBox={hardBox} />
        ))}
      </div>
      <div className={styles.add_btn}>
        <AddButton
          key={hardBoxes.id}
          hardBoxes={hardBoxes}
          addHardBox={addHardBox}
        />
      </div>
    </section>
  );
};

export default HardMode;
