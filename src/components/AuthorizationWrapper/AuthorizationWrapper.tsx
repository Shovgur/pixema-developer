import React from "react";
import { Outlet } from "react-router-dom";
import LogoSvg from "../../icons/LogoSvg";
import "./AuthorizationWrapper.css";

const AuthorizationWrapper = () => {
  return (
    <div className="authorization">
      <div className="authorization__container">
        <header>
          <LogoSvg></LogoSvg>
        </header>
        <Outlet></Outlet>
        <footer>© All Rights Reserved</footer>
      </div>
    </div>
  );
};

export default AuthorizationWrapper;
