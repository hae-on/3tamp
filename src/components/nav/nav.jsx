import React, { useEffect } from 'react';
import styles from './nav.module.css';
import logo from '../../img/logo.png';
import { useLocation, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

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
        navigate('/');
      }
    });
  });

  // navbar 선택 시 스타일링
  const activeTab = (location, path) => {
    if (location.pathname === path) {
      return {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '7px',
      };
    }
  };

  return (
    <section className={styles.nav}>
      <div className={styles.title_container} onClick={() => navigate('/home')}>
        <img className={styles.logo} src={logo} alt='logo' />
        <span className={styles.title}>3tamp</span>
      </div>
      <ul className={styles.memu}>
        <li>
          <NavLink
            to='/hardMode'
            className={styles.menu_item}
            style={activeTab(location, '/hardMode')}
          >
            hard mode
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/softMode'
            className={styles.menu_item}
            style={activeTab(location, '/softMode')}
          >
            soft mode
          </NavLink>
        </li>
      </ul>
      <div>
        <button className={styles.logout} onClick={onLogout}>
          logout
        </button>
        <a className={styles.github} href='https://github.com/hae-on/3tamp'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-github'
            viewBox='0 0 16 16'
          >
            <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
          </svg>
        </a>
      </div>
    </section>
  );
};
export default Nav;
