import React from "react";
import "./PagesWrapper.css";
import classNames from "classnames";
import Sidebar from "../Sidebar";
import HeaderPage from "../HeaderPage";
import FiltersMenu from "../FiltersMenu";
import { Outlet } from "react-router-dom";

const PagesWrapper = () => {
  return (
    <div className={classNames("pagesWrapper")}>
      <div className="pages__container _container">
        <Sidebar></Sidebar>
        <div className="pages__content">
          <HeaderPage></HeaderPage>
          <Outlet></Outlet>
        </div>
      </div>
      <FiltersMenu></FiltersMenu>
    </div>
  );
};

export default PagesWrapper;
