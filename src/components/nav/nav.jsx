import React, { useEffect } from "react";
import styles from "./nav.module.css";
import logo from "../../img/logo.png";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Nav = ({ authService }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const activeStyle = {
    background: `black`,
    color: `white`,
  };

  return (
    <section className={styles.nav}>
      <div className={styles.title_container} onClick={() => navigate("/home")}>
        <img className={styles.logo} src={logo} alt="logo" />
        <span className={styles.title}>3tamp</span>
      </div>
      <ul className={styles.memu}>
        <li className={styles.menu_item}>
          <NavLink to="/hardMode" activeStyle={styles.activeStyle}>
            hard mode
          </NavLink>
        </li>
        <li className={styles.menu_item}>
          <NavLink to="/softMode" activeStyle={activeStyle}>
            soft mode
          </NavLink>
        </li>
        <li className={styles.menu_item}>
          <NavLink to="/collection" activeStyle={activeStyle}>
            collection
          </NavLink>
        </li>
      </ul>
      <button className={styles.logout} onClick={onLogout}>
        logout
      </button>
    </section>
  );
};
export default Nav;
