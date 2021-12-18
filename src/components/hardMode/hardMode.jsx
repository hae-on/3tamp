import React, { useState } from "react";
import styles from "./hardMode.module.css";
import AddButton from "../addButton/addButton";
import HardModeBox from "../hardModeBox/hardModeBox";

const HardMode = () => {
  const [hardBoxes, setHardBoxes] = useState({
    1: {
      id: "1",
      title: "html 공부하기",
      color: "red",
      startDate: new Date(2021, 11, 15),
      endDate: new Date(2021, 12, 4),
    },
    2: {
      id: "2",
      title: "영어 단어 외우기",
      color: "purple",
      startDate: new Date(2021, 11, 30),
      endDate: new Date(2021, 12, 19),
    },
    3: {
      id: "3",
      title: "책 읽기",
      color: "orange",
      startDate: new Date(2021, 12, 30),
      endDate: new Date(2022, 1, 19),
    },
  });

  const creatOrUpdateHardBox = (hardBox) => {
    setHardBoxes((hardBoxes) => {
      const updated = { ...hardBoxes };
      updated[hardBox.id] = hardBox;
      return updated;
    });
  };

  const deleteHardBox = (hardBox) => {
    setHardBoxes((hardBoxes) => {
      const updated = { ...hardBoxes };
      delete updated[hardBox.id];
      return updated;
    });
  };

  return (
    <section className={styles.hardMode}>
      <div className={styles.boxes}>
        {Object.keys(hardBoxes).map((key) => (
          <HardModeBox
            key={key}
            hardBox={hardBoxes[key]}
            updateHardBox={creatOrUpdateHardBox}
            deleteHardBox={deleteHardBox}
          />
        ))}
      </div>
      <div className={styles.add_btn}>
        <AddButton
          key={hardBoxes.id}
          hardBoxes={hardBoxes}
          addHardBox={creatOrUpdateHardBox}
        />
      </div>
    </section>
  );
};

export default HardMode;
