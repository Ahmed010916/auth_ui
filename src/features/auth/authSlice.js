import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    count: "",
  },
  reducers: {
    count: (state) => {
      state.count++;
    },
  },
});

export const { count } = authSlice.actions;

export default authSlice.reducer;
