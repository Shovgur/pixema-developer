import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginUserDataType, RegisterUserDataType } from "../../types";

type AuthState = {
  authStatus: boolean;
};

const initialState: AuthState = {
  authStatus: !!localStorage.getItem("access_token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state: any, action: PayloadAction<RegisterUserDataType>) => {},
    loginUser: (state: any, action: PayloadAction<LoginUserDataType>) => {},
    setAuthStatus: (state: any, action: PayloadAction<boolean>) => {
      state.authStatus = action.payload;
    },
  },
});

export const { registerUser, loginUser, setAuthStatus } = authSlice.actions;

export default authSlice.reducer;

export const AuthSelectors = {
  getAuthStatus: (state: any) => state.auth.authStatus,
};
