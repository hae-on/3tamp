import React, { useState, useEffect } from "react";
import styles from "../hardMode/mode.module.css";
import AddButton from "../addButton/addButton";
import SoftModeBox from "../softModeBox/softModeBox";
import { useLocation } from "react-router-dom";

const SoftMode = ({ boxRepository, authService }) => {
  const location = useLocation();
  const locationState = location?.state;
  const [softBoxes, setsoftBoxes] = useState({});
  const [userId, setUserId] = useState(locationState && locationState.id);

  // 컴포넌트 언마운트 시 불필요한 네트워크 사용 최소화
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = boxRepository.syncsoftBoxes(userId, (softBoxes) => {
      setsoftBoxes(softBoxes);
    });
    return () => stopSync();
  }, [userId, boxRepository]);

  // 유저 변경이 있을 때마다 유저 아이디 전달
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      }
    });
  }, [authService, userId]);

  const creatOrUpdatesoftBox = (softBox) => {
    setsoftBoxes((softBoxes) => {
      const updated = { ...softBoxes };
      updated[softBox.id] = softBox;
      return updated;
    });
    boxRepository.savesoftBox(userId, softBox);
  };

  const deletesoftBox = (softBox) => {
    setsoftBoxes((softBoxes) => {
      const updated = { ...softBoxes };
      delete updated[softBox.id];
      return updated;
    });
    boxRepository.removesoftBox(userId, softBox);
  };

  return (
    <section className={styles.softMode}>
      <div className={styles.boxes}>
        {Object.keys(softBoxes).map((key) => (
          <SoftModeBox
            key={key}
            softBox={softBoxes[key]}
            updatesoftBox={creatOrUpdatesoftBox}
            deletesoftBox={deletesoftBox}
          />
        ))}
      </div>
      <div className={styles.add_btn}>
        <AddButton
          key={softBoxes.id}
          softBoxes={softBoxes}
          addBox={creatOrUpdatesoftBox}
        />
      </div>
    </section>
  );
};

export default SoftMode;
