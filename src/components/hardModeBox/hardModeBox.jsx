import React, { useEffect, useRef, useState } from "react";
import styles from "./hardModeBox.module.css";
import btn from "../../img/logo.png";
import o from "../../img/hard_o.png";
import x from "../../img/hard_x.png";
import DeleteOrCompleteModal from "../deleteOrCompleteModal/deleteOrCompleteModal";
import moment from "moment";

const HardModeBox = ({ hardBox, updateHardBox, deleteHardBox }) => {
  const { title, color, startDate } = hardBox;

  const [modalOpen, setModalOpen] = useState(false);

  const titleRef = useRef();

  // 3주 기간 계산
  const endDate = moment(startDate).add(20, "days");

  const getDaysBetweenDates = function (startDate, endDate) {
    const startAt = moment(startDate);
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
  const today = moment().format("YYYY-MM-DD");

  // 오늘 날짜와 mapping된 날짜가 맞으면 도장
  // function checkDate(day, index) {
  //   if (today !== day) {
  //     toggleStamp(index);
  //   }
  // }

  // 삭제 및 완료 모달
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateHardBox({
      ...hardBox,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    console.log(event.currentTarget.value);
  };

  // const newArr = Array(dates.length).fill(false);

  // const [isBoxSelect, setBoxSelect] = useState(newArr);

  // const handleIDX = (index) => {
  //   newArr[index] = true;
  //   setBoxSelect(newArr);
  //   // 파이어베이스의 isBoxSelect[index] 값이 true라면 ...
  // };

  // console.log(isBoxSelect);

  // function toggleStamp(id) {
  //   setClicked((stamp) => ({
  //     ...stamp,
  //     [id]: !stamp[id],
  //   }));
  //   console.log(id);
  // }

  // useEffect(() => {
  //   updateHardBox({
  //     ...hardBox,
  //     isBoxSelect,
  //   });
  // }, [isBoxSelect]);

  let hardCliked = hardBox.isClicked;
  const [isClicked, setClicked] = useState(hardCliked);

  function toggleStamp() {
    setClicked(!isClicked);
  }

  useEffect(() => {
    updateHardBox({
      ...hardBox,
      isClicked,
    });
  }, [isClicked]);

  console.log(hardCliked);

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
              <td
                className={`${styles.date} ${test(isClicked)}`}
                onClick={() => {
                  toggleStamp();
                }}

                // onClick={ setClicked(!isClicked)}
              ></td>
              {/* {dates.map((day, index) => (
                <td
                  key={index}
                  //className={
                  // isBoxSelect[index]
                  //   ? `${styles.date} ${styles.hard_o}`
                  //   : `${styles.date} ${styles.hard_x}`
                  // }
                  className={styles.date}
                  onClick={() => {
                    // checkDate(day, index);
                    // handleIDX(index);
                  }}
                >
                  {/* <img
                    className={styles.td_box}
                    src={isBoxSelect[index] ? o : x}
                    alt="test"
                  /> 
                  {day}
                </td>
              ))}
                  */}
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

function test(hardCliked) {
  switch (hardCliked) {
    case true:
      return styles.hard_o;
    case false:
      return styles.hard_x;
    default:
      throw new Error(`unknown isClicked: ${hardCliked}`);
  }
}

export default HardModeBox;
