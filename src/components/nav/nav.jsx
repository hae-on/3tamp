import React, { useEffect } from "react";
import styles from "./nav.module.css";
import logo from "../../img/logo.png";
import { useLocation, useNavigate } from "react-router";
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

  const location = useLocation();

  const activeTab = (location, path) => {
    if (location.pathname === path) {
      return {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "7px",
      };
    }
  };

  return (
    <section className={styles.nav}>
      <div className={styles.title_container} onClick={() => navigate("/home")}>
        <img className={styles.logo} src={logo} alt="logo" />
        <span className={styles.title}>3tamp</span>
      </div>
      <ul className={styles.memu}>
        <li>
          <NavLink
            to="/hardMode"
            className={styles.menu_item}
            style={activeTab(location, "/hardMode")}
          >
            hard mode
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/softMode"
            className={styles.menu_item}
            style={activeTab(location, "/softMode")}
          >
            soft mode
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={styles.menu_item}
            style={activeTab(location, "/collection")}
          >
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
