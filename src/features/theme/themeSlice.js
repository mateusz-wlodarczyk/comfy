import { applyTheme } from "@/utils/applyTheme";
import { createSlice } from "@reduxjs/toolkit";
const initializeTheme = () => {
  const theme = localStorage.getItem("theme");
  applyTheme(theme);
  return theme;
};
const initialState = {
  theme: initializeTheme(),
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      applyTheme(action.payload);
      localStorage.setItem("theme", action.payload);
    },
  },
});
export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
