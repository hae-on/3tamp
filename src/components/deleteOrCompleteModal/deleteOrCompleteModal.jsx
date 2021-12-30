import React from "react";
import styles from "./deleteOrCompleteModal.module.css";
import { FaTimes } from "react-icons/fa";
import bear from "../../img/bear.png";
import { useLocation } from "react-router";

const DeleteOrCompleteModal = ({
  modalClose,
  hardBox,
  softBox,
  deleteHardBox,
  deletesoftBox,
}) => {
  const location = useLocation();

  const onSubmit = () => {
    if (location.pathname === "/hardMode") deleteHardBox(hardBox);
    else deletesoftBox(softBox);
  };

  return (
    <div className={styles.container} onClick={modalClose}>
      <div className={styles.modal}>
        <button className={styles.close_btn} onClick={modalClose}>
          <FaTimes className={styles.x} />
        </button>
        <div className={styles.bear_img}>
          <img src={bear} alt="bear" className={styles.bear} />
        </div>
        <div className={styles.title}>
          <p className={styles.delete_title}>
            도장판을 <span className={styles.delete_word}>삭제</span>
            하시겠어요?
          </p>
        </div>
        <p className={styles.warning}>
          ⚠️ 완료 또는 삭제 후 복구할 수 없으니 신중하게 눌러주세요!
        </p>
        <div className={styles.btn_container}>
          <button className={styles.delete_btn} onClick={onSubmit}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteOrCompleteModal;
