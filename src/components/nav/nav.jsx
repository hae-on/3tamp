import React from "react";
import styles from "./nav.module.css";
import logo from "../../img/logo.png";
import { useNavigate } from "react-router";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.nav}>
      <div className={styles.title_container} onClick={() => navigate("/home")}>
        <img className={styles.logo} src={logo} alt="logo" />
        <span className={styles.title}>3tamp</span>
      </div>
      <ul className={styles.memu}>
        <li className={styles.menu_item} onClick={() => navigate("/hardMode")}>
          hard mode
        </li>
        <li className={styles.menu_item} onClick={() => navigate("/softMode")}>
          soft mode
        </li>
        <li
          className={styles.menu_item}
          onClick={() => navigate("/collection")}
        >
          collection
        </li>
      </ul>
      <button className={styles.logout}>logout</button>
    </section>
  );
};
export default Nav;
