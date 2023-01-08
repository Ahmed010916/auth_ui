import { createAsyncThunk } from "@reduxjs/toolkit";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebase";

export const LoginUser = createAsyncThunk(
  "auth/loginuser",
  async ({ email, password }, { rejectWithValue }) => {
    const user = await signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        let token = user.user.uid;
        localStorage.setItem("UserID", token);
        return {
          message: "User Created successfully",
          error: null,
        };
      })
      .catch((e) => {
        return rejectWithValue({ message: "EError From email or password" });
      });
    return user;
  }
);

export const CreateUser = createAsyncThunk(
  "auth/createuser",
  async ({ email, password }) => {
    const user = await signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        let token = user.user.uid;
        localStorage.setItem("UserID", token);
        return {
          message: "User Created successfully",
          error: null,
        };
      })
      .catch((e) => {
        return { message: "Error From email or password" };
      });
    return user;
  }
);
