import { createSlice } from "@reduxjs/toolkit";
import { CreateUser, LoginUser } from "./UserActionThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedin: false,
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [LoginUser.pending]: (state) => {
      state.loading = true;
    },
    [LoginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.message = payload.message;
      state.loggedin = true;
    },
    [LoginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.message = payload.message;
    },
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
