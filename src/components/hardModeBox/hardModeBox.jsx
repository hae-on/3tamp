import React, { useEffect, useRef, useState } from "react";
import styles from "./hardModeBox.module.css";
import btn from "../../img/logo.png";
import o from "../../img/hard_o.png";
import x from "../../img/hard_x.png";

const HardModeBox = ({ hardBox, updateHardBox }) => {
  const titleRef = useRef();

  const { title, color, startDate, endDate } = hardBox;
  const [clicked, setClicked] = useState([]);

  // 스탬프 toggle
  function toggleStamp(id) {
    setClicked((stamp) => ({
      ...stamp,
      [id]: !stamp[id],
    }));
  }

  // 3주 기간 계산
  function getDates(startDate, endDate) {
    const dates = [];
    let currentDate = startDate;
    const addDays = function (days) {
      // 데이터 원시 값 반환
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  }
  // 기간 출력 & 날짜 형식 변환
  let dates = getDates(startDate, endDate);
  dates = dates.map((x) => x.toISOString().substring(0, 10));

  // 날짜 체크
  let today = new Date().toISOString().substring(0, 10);

  function checkDate(day, index) {
    // toggleStamp(index);
    if (today === day) {
      toggleStamp(index);
    }
  }

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
          <button className={styles.btn}>
            <img src={btn} alt="btn" className={styles.btn_img} />
          </button>
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
