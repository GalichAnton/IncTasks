import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../Pages";
import classes from "./Header.module.css";
function Header() {
  return (
    <header className={classes.header}>
      <NavLink
        className={({ isActive }) =>
          isActive ? classes.link_active : classes.link
        }
        to={PATH.PRE_JUNIOR}
      >
        PRE JUNIOR
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? classes.link_active : classes.link
        }
        to={PATH.JUNIOR}
      >
        JUNIOR
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? classes.link_active : classes.link
        }
        to={PATH.JUNIOR_PLUS}
      >
        JUNIOR PLUS
      </NavLink>
    </header>
  );
}

export default Header;
