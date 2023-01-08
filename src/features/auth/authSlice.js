import { createSlice } from "@reduxjs/toolkit";
import { CreateUser } from "./UserActionThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedin: false,
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [CreateUser.pending]: (state) => {
      state.loading = true;
    },
    [CreateUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.message = payload.message;
      state.loggedin = true;
    },
    [CreateUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.message = payload.message;
      state.loggedin = false;
    },
  },
});

export const { isloggedin } = authSlice.actions;

export default authSlice.reducer;
