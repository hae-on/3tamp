import React from "react";
import styles from "./home.module.css";
import bear from "../../img/homeBear.png";
import hai from "../../img/hai.png";

const Home = ({ authService }) => {
  return (
    <>
      <section className={styles.bg}>
        <img src={bear} alt="bear" className={styles.bear} />
        <img src={hai} alt="hai" className={styles.hai} />
        <span className={styles.title}>3tamp에 오신 것을 환영해요!</span>
        <span className={styles.content1}>자신만의 습관을 만들고 싶나요?</span>
        <span className={styles.content2}>3tamp와 함께라면 어렵지 않아요</span>
        <span className={styles.content3}>
          아래로 스크롤을 해 사용법을 같이 알아봐요
        </span>
        <span className={styles.content4}>
          3주 뒤엔 멋진 습관이 완성되어 있을거에요 : )
        </span>
      </section>
    </>
  );
};

export default Home;
