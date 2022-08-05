import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "./Pages";
import s from "./Header.module.css";

function Header() {
  return (
    <nav className={s.nav}>
      <ul className={s.container}>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.link} ${s.activeLink}` : s.link
            }
            to={PATH.PRE_JUNIOR}
          >
            Pre Junior
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.link} ${s.activeLink}` : s.link
            }
            to={PATH.JUNIOR}
          >
            Junior
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.link} ${s.activeLink}` : s.link
            }
            to={PATH.JUNIOR_PLUS}
          >
            Junior Plus
          </NavLink>
        </li>
      </ul>
      <div className={s.menuIcon}></div>
    </nav>
  );
}

export default Header;
