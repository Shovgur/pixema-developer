import React, { useEffect } from "react";
import "./Sidebar.css";
import { SidebarTabsEnum, PathEnum, FilterSortTabsEnum } from "../../enums/enums";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import HomeSvg from "../../icons/HomeSvg";
import TrendsSvg from "../../icons/TrendsSvg";
import FavoritesSvg from "../../icons/FavoritesSvg";
import SettingsSvg from "../../icons/SettingsSvg";
import LogoSvg from "../../icons/LogoSvg";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarTab, TabSelectors } from "../../redux/reducers/tabReducer";
import { setFilterCountry, setFilterGenres, setFilterSortTab } from "../../redux/reducers/filterReducer";

const TABS = [
  { tabName: SidebarTabsEnum.Home, icon: <HomeSvg></HomeSvg>, path: PathEnum.Home },
  { tabName: SidebarTabsEnum.Trends, icon: <TrendsSvg></TrendsSvg>, path: PathEnum.Trends },
  { tabName: SidebarTabsEnum.Favorites, icon: <FavoritesSvg></FavoritesSvg>, path: PathEnum.Favorites },
  { tabName: SidebarTabsEnum.Settings, icon: <SettingsSvg></SettingsSvg>, path: PathEnum.Settings },
];

const Sidebar = () => {
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  const clearFilter = () => {
    dispatch(setFilterCountry(""));
    dispatch(setFilterGenres([]));
    dispatch(setFilterSortTab(FilterSortTabsEnum.Movie));
  };

  useEffect(() => {
    if (currentPath === PathEnum.Home) {
      dispatch(setSidebarTab(SidebarTabsEnum.Home));
      clearFilter();
    } else if (currentPath === PathEnum.Trends) {
      dispatch(setSidebarTab(SidebarTabsEnum.Trends));
      clearFilter();
    } else if (currentPath === PathEnum.Favorites) {
      dispatch(setSidebarTab(SidebarTabsEnum.Favorites));
      clearFilter();
    } else if (currentPath === PathEnum.Settings) {
      dispatch(setSidebarTab(SidebarTabsEnum.Settings));
    } else {
      dispatch(setSidebarTab(""));
    }
  }, [currentPath]);

  const activeTab = useSelector(TabSelectors.getSidebarTab);

  const onTabClick = (path: string, tabName: string) => {
    navigete(path);
    dispatch(setSidebarTab(tabName));
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__body">
        <LogoSvg></LogoSvg>
        <nav className="sidebar__nav">
          <ul className="sidebar__nav__ul">
            {TABS.map((item: any) => {
              const { path, icon, tabName } = item;
              return (
                <li
                  onClick={() => onTabClick(path, tabName)}
                  key={tabName}
                  className={classNames("sidebar__sidebar__nav__ul__li", {
                    ["_active"]: tabName === activeTab,
                  })}
                >
                  {icon}
                  <span className="sidebar__nav__ul__li__content">{tabName}</span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <span className="sidebar__footer">© All Rights Reserved</span>
    </aside>
  );
};

export default Sidebar;
