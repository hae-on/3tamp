import React, { useState } from "react";
import styles from "./hardModeBox.module.css";
import btn from "../../img/logo.png";

const HardModeBox = ({ hardBox }) => {
  const { title, color, startDate, endDate } = hardBox;
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(!clicked);
  };

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

  // Usage
  let dates = getDates(startDate, endDate);
  dates = dates.map((x) => x.toISOString().substring(0, 10));

  console.log(dates);

  return (
    <>
      <div className={`${styles.box} ${getStyles(color)}`}>
        <div className={styles.head}>
          <form>
            <h1 className={styles.title}> {title} </h1>
          </form>
          <button className={styles.btn}>
            <img src={btn} alt="btn" className={styles.btn_img} />
          </button>
        </div>
        <table border="2" className={styles.table}>
          <thead>
            <tr className={styles.dates}>
              {dates.map((day) => (
                <td
                  key={day}
                  className={styles.date}
                  // className={clicked ? styles.hard_o : null}
                  onClick={onClick}
                >
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
