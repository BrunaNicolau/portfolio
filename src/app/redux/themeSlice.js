import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "theme",
  initialState: {
    theme: true,
  },
  reducers: {
    changeTheme(state, { payload }) {
      return { ...state, theme: payload };
    },
  },
});

export const { changeTheme } = slice.actions
export const selectTheme = state => state.theme
export default slice.reducer
