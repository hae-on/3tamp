import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { FaTimes } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import bearImage from "../../img/heartbear.png";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goToHome = (userId) => {
    navigate("/home", { state: { id: userId } });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToHome(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToHome(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <button onClick={() => navigate("/")} className={styles.close}>
          <FaTimes className={styles.x} />
        </button>
        <div className={styles.message_box}>
          <span className={styles.whoops}>앗,</span>
          <span className={styles.message}>로그인이 필요해요!</span>
        </div>
        <div className={styles.image_box}>
          <img src={bearImage} alt="bearImage" />
        </div>
        <span>아래 버튼을 눌러 구글 로그인을 해요 : )</span>
        <button onClick={onLogin} className={styles.google}>
          <AiOutlineGoogle className={styles.google__icon} />
          Google
        </button>
      </div>
    </section>
  );
};

export default Login;
