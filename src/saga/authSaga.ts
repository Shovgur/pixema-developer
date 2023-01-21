import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, put, call } from "redux-saga/effects";
import { PathEnum } from "../enums/enums";
import { loginUser, registerUser, setAuthStatus } from "../redux/reducers/authReducer";
import { LoginUserDataType, RegisterUserDataType } from "../types";
import { loginUserApi, registerUserApi } from "./api";

function* registerUserSaga(action: PayloadAction<RegisterUserDataType>) {
  const { first_name, email, password, password_confirmation, token_name } = action.payload;
  const { status } = yield call(registerUserApi, {
    first_name,
    email,
    password,
    password_confirmation,
    token_name,
  });
  if (status === 200) {
    yield window.location.replace(PathEnum.SignIn);
  }
}

function* loginUserSaga(action: PayloadAction<LoginUserDataType>) {
  const { email, password, token_name } = action.payload;
  const { data, status } = yield call(loginUserApi, { email, password, token_name });
  if (status === 200) {
    const { access_token } = data.user;
    yield localStorage.setItem("access_token", access_token);
    yield put(setAuthStatus(true));
    yield window.location.replace(PathEnum.Home);
  }
}

export default function* authWatcher() {
  yield all([takeLatest(registerUser, registerUserSaga), takeLatest(loginUser, loginUserSaga)]);
}
