import React from "react";
import styles from "./home.module.css";
import bear from "../../img/homeBear.png";
import hai from "../../img/hai.png";
import add from "../../img/add.png";
import newStamp from "../../img/newStamp.png";
import stamp from "../../img/stamp.png";

const Home = ({ authService }) => {
  return (
    <>
      <section className={styles.bg}>
        <div className={styles.intro}>
          <img src={bear} alt="bear" className={styles.bear} />
          <img src={hai} alt="hai" className={styles.hai} />
          <span className={styles.title}>3tamp에 오신 것을 환영해요!</span>
          <span className={styles.content1}>
            자신만의 습관을 만들고 싶나요?
          </span>
          <span className={styles.content2}>
            3tamp와 함께라면 어렵지 않아요
          </span>
          <span className={styles.content3}>
            아래로 스크롤을 해 사용법을 같이 알아봐요
          </span>
          <span className={styles.content4}>
            3주 뒤엔 멋진 습관이 완성되어 있을거에요 : )
          </span>
        </div>
        <div className={styles.hard_mode}>
          <p className={styles.hard_title}>Hard Mode 사용법</p>
          <div className={styles.hard_imgs}>
            <div className={styles.input}>
              <img src={add} alt="add" className={styles.add_form} />
              <span className={styles.input_intro}>
                먼저 새로운 습관의 이름과 색상을 입력해주세요
              </span>
            </div>
            <div className={styles.new}>
              <img src={newStamp} alt="newStamp" className={styles.new_stamp} />
              <span className={styles.new_intro}>
                새로운 습관이 생성됐어요! <br />
                생성한 날짜로부터 21일간 달려봐요
              </span>
            </div>
            <div className={styles.stamp_box}>
              <img src={stamp} alt="stamp" className={styles.stamp} />
              <span className={styles.stamp_intro}>
                당일만 도장을 찍을 수 있어요 <br />
                까먹지 말고 찍도록 해요
              </span>
            </div>
          </div>
        </div>
        !
      </section>
    </>
  );
};

export default Home;
