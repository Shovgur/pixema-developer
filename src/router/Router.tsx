import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { PathEnum } from "../enums/enums";
import { useSelector } from "react-redux";
import { AuthSelectors } from "../redux/reducers/authReducer";
import PagesWrapper from "../components/PagesWrapper";
import AuthorizationWrapper from "../components/AuthorizationWrapper";
import Films from "../pages/Films";
import Settings from "../pages/Settings";
import SignInForm from "../pages/Forms/SignInForm";
import SignUpForm from "../pages/Forms/SignUpForm";
import Film from "../pages/Film";

const Router = () => {
  const authStatus = useSelector(AuthSelectors.getAuthStatus);
  return (
    <BrowserRouter>
      {authStatus ? (
        <Routes>
          <Route path="/" element={<PagesWrapper></PagesWrapper>}>
            <Route path={PathEnum.Home} element={<Films pageName={"Home"}></Films>}></Route>
            <Route path={PathEnum.Trends} element={<Films pageName={"Trends"}></Films>}></Route>
            <Route path={PathEnum.Favorites} element={<Films pageName={"Favorites"}></Films>}></Route>
            <Route path={PathEnum.Settings} element={<Settings></Settings>}></Route>
            <Route path={PathEnum.Film} element={<Film></Film>}></Route>
          </Route>
          <Route path="*" element={<Navigate to={PathEnum.Home} replace></Navigate>}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path={PathEnum.Auth} element={<AuthorizationWrapper></AuthorizationWrapper>}>
            <Route path={PathEnum.SignIn} element={<SignInForm></SignInForm>}></Route>
            <Route path={PathEnum.SignUp} element={<SignUpForm></SignUpForm>}></Route>
          </Route>
          <Route path="*" element={<Navigate to={PathEnum.SignIn} replace></Navigate>}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
