import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeChanged(state) {
      state.darkmode = !state.darkmode;
    },
  },
});

export const { themeChanged } = themeSlice.actions;

export default themeSlice.reducer;
