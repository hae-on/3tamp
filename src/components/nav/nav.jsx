import React from "react";
import styles from "./nav.module.css";
import logo from "../../img/logo.png";
// import { useNavigate } from "react-router";

const Nav = (props) => {
  //   const navigate = useNavigate();

  return (
    <section className={styles.nav}>
      <div className={styles.title_container}>
        <img className={styles.logo} src={logo} alt="logo" />
        <span className={styles.title}>3tamp</span>
      </div>
      <ul className={styles.memu}>
        <li className={styles.menu_item}>hard mode</li>
        <li className={styles.menu_item}>soft mode</li>
        <li className={styles.menu_item}>collection</li>
      </ul>
      <button className={styles.logout}>logout</button>
    </section>
  );
};
export default Nav;
