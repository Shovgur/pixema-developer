import React, { useState } from "react";
import "./User.css";
import Popup from "reactjs-popup";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PathEnum, SidebarTabsEnum } from "../../enums/enums";
import { setSidebarTab } from "../../redux/reducers/tabReducer";
import { setAuthStatus } from "../../redux/reducers/authReducer";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isMenuOpen, setMenu] = useState(false);

  const onEditProfileClick = () => {
    navigate(PathEnum.Settings);
    dispatch(setSidebarTab(SidebarTabsEnum.Settings));
  };

  const onLogoutClick = () => {
    dispatch(setAuthStatus(false));
    localStorage.removeItem("access_token");
    navigate(PathEnum.SignIn);
  };

  return (
    <div className="user">
      <div className="user__info">
        <div className="user__icon">
          <span className="user__icon__name">UN</span>
        </div>
        <span onClick={onEditProfileClick} className="user__username">
          User name
        </span>
      </div>
      <Popup
        trigger={
          <span className={classNames("material-symbols-outlined", "expand_more", { ["_active"]: isMenuOpen })}>
            expand_more
          </span>
        }
        onOpen={() => setMenu(true)}
        onClose={() => setMenu(false)}
        position="bottom right"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={100}
        mouseEnterDelay={0}
        contentStyle={{ padding: "0px", border: "none" }}
        arrow={false}
      >
        <div className="menu">
          <div onClick={onEditProfileClick} className="menuItem">
            Edit profile
          </div>
          <div onClick={onLogoutClick} className="menuItem">
            Logout
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default User;
