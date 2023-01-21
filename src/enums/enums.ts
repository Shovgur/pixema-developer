import React from "react";

export enum SidebarTabsEnum {
  Home = "Home",
  Trends = "Trends",
  Favorites = "Favorites",
  Settings = "Settings",
}

export enum PathEnum {
  Home = "/home",
  Trends = "/trends",
  Favorites = "/favorites",
  Settings = "/settings",
  Film = "/film/:id",
  Auth = "/auth",
  SignIn = "/auth/signin",
  SignUp = "/auth/signup",
}

export enum FilterSortTabsEnum {
  Movie = "Movie",
  Series = "Series",
}

export enum ButtonEnum {
  Clear = "Clear filter",
  Show = "Show results",
}
