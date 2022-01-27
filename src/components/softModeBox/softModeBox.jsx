import React, { useEffect, useRef, useState } from "react";
import styles from "../hardModeBox/modeBox.module.css";
import btn from "../../img/logo.png";
import DeleteOrCompleteModal from "../deleteOrCompleteModal/deleteOrCompleteModal";
import moment from "moment";
import o from "../../img/soft_o.jpg";
import x from "../../img/soft_x.jpg";

const SoftModeBox = ({ softBox, updatesoftBox, deletesoftBox }) => {
  const { title, color } = softBox;

  const softCliked = softBox.isClicked;

  const [modalOpen, setModalOpen] = useState(false);
  const [isClicked, setClicked] = useState(softCliked);

  const titleRef = useRef();

  const dates = Array.from({ length: 21 }, (v, i) => i);

  // day와 형태를 맞추기 위해  format 변경
  const today = moment().format("MM-DD");

  // 삭제 및 완료 모달
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updatesoftBox({
      ...softBox,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  // 도장찍기
  function toggleStamp(index) {
    setClicked((stamp) => ({
      ...stamp,
      [index]: today,
    }));
  }

  useEffect(() => {
    updatesoftBox({
      ...softBox,
      isClicked,
    });
  }, [isClicked]);

  return (
    <>
      <div className={`${styles.box} ${getStyles(color)}`}>
        <div className={styles.head}>
          <form>
            <input
              className={styles.title}
              type="text"
              name="title"
              ref={titleRef}
              value={title}
              onChange={onChange}
            />
          </form>
          <button className={styles.btn} onClick={modalClose}>
            <img src={btn} alt="btn" className={styles.btn_img} />
          </button>
          {modalOpen && (
            <DeleteOrCompleteModal
              modalClose={modalClose}
              deletesoftBox={deletesoftBox}
              softBox={softBox}
            />
          )}
        </div>
        <table border="2" className={styles.table}>
          <thead>
            <tr className={styles.dates}>
              {dates.map((index) => (
                <td
                  key={index}
                  className={styles.date}
                  onClick={() => {
                    toggleStamp(index);
                  }}
                >
                  <img
                    className={styles.td_box}
                    src={softCliked[index] ? o : x}
                    alt="stamp"
                  />
                  {softCliked[index] ? softCliked[index] : null}
                </td>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

function getStyles(color) {
  switch (color) {
    case "red":
      return styles.red;
    case "orange":
      return styles.orange;
    case "yellow":
      return styles.yellow;
    case "green":
      return styles.green;
    case "blue":
      return styles.blue;
    case "purple":
      return styles.purple;
    case "pink":
      return styles.pink;
    default:
      throw new Error(`unknown color: ${color}`);
  }
}

export default SoftModeBox;
