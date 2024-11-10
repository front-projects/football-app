import { createSlice } from "@reduxjs/toolkit";

export const clicksSlice = createSlice({
  name: "clicks",
  initialState: 0,
  reducers: {
    plusClick: (state) => {
      return state + 1;
    },
    resetClicks: () => {
      return 0;
    },
  },
});

export const { plusClick, resetClicks } = clicksSlice.actions;
export const clicksReducer = clicksSlice.reducer;
