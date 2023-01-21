import { createSlice } from "@reduxjs/toolkit";
import { SidebarTabsEnum } from "../../enums/enums";

type TabState = {
  sidebarTab: string;
};

const initialState: TabState = {
  sidebarTab: SidebarTabsEnum.Home,
};

const tabSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setSidebarTab: (state, action) => {
      state.sidebarTab = action.payload;
    },
  },
});

export const { setSidebarTab } = tabSlice.actions;

export default tabSlice.reducer;

export const TabSelectors = {
  getSidebarTab: (state: any) => state.tab.sidebarTab,
};
