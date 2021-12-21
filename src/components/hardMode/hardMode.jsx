import React, { useState, useEffect } from "react";
import styles from "./hardMode.module.css";
import AddButton from "../addButton/addButton";
import HardModeBox from "../hardModeBox/hardModeBox";
import { useLocation } from "react-router-dom";

const HardMode = ({ boxRepository, authService }) => {
  const location = useLocation();
  const locationState = location?.state;
  const [hardBoxes, setHardBoxes] = useState({});
  const [userId, setUserId] = useState(locationState && locationState.id);

  // 컴포넌트 언마운트 시 불필요한 네트워크 사용 최소화
  // useEffect(() => {
  //   if (!userId) {
  //     return;
  //   }
  //   const stopSync = boxRepository.syncHardBoxes(userId, (hardBoxes) => {
  //     setHardBoxes(hardBoxes);
  //   });
  //   return () => stopSync();
  // }, [userId, boxRepository]);

  // 유저 변경이 있을 때마다 유저 아이디 전달
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      }
    });
  }, [authService, userId]);

  const creatOrUpdateHardBox = (hardBox) => {
    setHardBoxes((hardBoxes) => {
      const updated = { ...hardBoxes };
      updated[hardBox.id] = hardBox;
      return updated;
    });
    boxRepository.saveHardBox(userId, hardBox);
  };

  const deleteHardBox = (hardBox) => {
    setHardBoxes((hardBoxes) => {
      const updated = { ...hardBoxes };
      delete updated[hardBox.id];
      return updated;
    });
    boxRepository.removeHardBox(userId, hardBox);
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
