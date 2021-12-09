import React from "react";
import s from "./Header.module.css";
import { BrowserRouter, NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" />
      <BrowserRouter>
        <div className={s.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
      </BrowserRouter>
    </header>
  );
};

export default Header;
