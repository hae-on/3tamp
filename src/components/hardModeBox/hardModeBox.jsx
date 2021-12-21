import React, { useEffect, useRef, useState } from "react";
import styles from "./hardModeBox.module.css";
import btn from "../../img/logo.png";
import o from "../../img/hard_o.png";
import x from "../../img/hard_x.png";
import DeleteOrCompleteModal from "../deleteOrCompleteModal/deleteOrCompleteModal";
import moment from "moment";

const HardModeBox = ({ hardBox, updateHardBox, deleteHardBox }) => {
  const { title, color, startDate } = hardBox;

  const [clicked, setClicked] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const titleRef = useRef();

  // 스탬프 toggle
  function toggleStamp(id) {
    setClicked((stamp) => ({
      ...stamp,
      [id]: !stamp[id],
    }));
  }

  // 3주 기간 계산
  const endDate = moment().add(20, "days");

  const getDaysBetweenDates = function (startDate, endDate) {
    const startAt = moment(startDate);
    // const endAt = moment(endDate);
    const now = startAt.clone(),
      dates = [];
    while (now.isSameOrBefore(endDate)) {
      dates.push(now.format("YYYY-MM-DD"));
      now.add(1, "days");
    }
    return dates;
  };

  const dates = getDaysBetweenDates(startDate, endDate);

  // day와 형태를 맞추기 위해  format 변경
  const today = moment(startDate).format("YYYY-MM-DD");

  // 오늘 날짜와 mapping된 날짜가 맞으면 도장
  function checkDate(day, index) {
    if (today === day) {
      toggleStamp(index);
    }
  }

  // 삭제 및 완료 모달
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    console.log(Object(clicked));
  }, [clicked]);

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateHardBox({
      ...hardBox,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

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
              deleteHardBox={deleteHardBox}
              hardBox={hardBox}
            />
          )}
        </div>
        <table border="2" className={styles.table}>
          <thead>
            <tr className={styles.dates}>
              {dates.map((day, index) => (
                <td
                  key={index}
                  // className={
                  //   clicked[index]
                  //     ? `${styles.date} ${styles.hard_o}`
                  //     : styles.date
                  // }
                  className={styles.date}
                  onClick={() => {
                    checkDate(day, index);
                  }}
                >
                  <img
                    className={styles.t}
                    src={clicked[index] ? o : x}
                    alt="test"
                  />
                  {day}
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

export default HardModeBox;
