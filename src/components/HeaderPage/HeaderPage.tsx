import React from "react";
import "./HeaderPage.css";
import Search from "../Search";
import User from "../User";
import { useLocation } from "react-router-dom";
import { PathEnum } from "../../enums/enums";

const HeaderPage = () => {
  const location = useLocation();
  const path = location.pathname;

  const isDisabled = path !== PathEnum.Home && path !== PathEnum.Trends;

  return (
    <header className="header">
      <Search isDisabled={isDisabled}></Search>
      <User></User>
    </header>
  );
};

export default HeaderPage;
