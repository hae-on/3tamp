import React, { useEffect } from "react";
import styles from "./nav.module.css";
import logo from "../../img/logo.png";
import { useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Nav = ({ authService }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onLogout = () => {
    authService.logout();
  };

  // 로그아웃 시 첫 페이지 이동
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  // navbar 선택 시 스타일링
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
      </ul>
      <button className={styles.logout} onClick={onLogout}>
        logout
      </button>
    </section>
  );
};
export default Nav;
