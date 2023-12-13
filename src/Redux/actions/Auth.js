import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axios";
import { setToken } from "../storage";

const SIGN_IN = "authentication:SIGN_IN";
const SIGN_UP = "authentication:SIGN_UP";

export const signInAction = createAsyncThunk(
  SIGN_IN,
  async (args, { rejectWithValue }) => {
    try {
      const response = await axiosClient().post("users/login/", args);

      console.log(response.data, "kkkkk");
      setToken(response.data.token_key); // Set token upon successful sign-in
      return response.data;
    } catch (error) {
      console.log(error, "error");
      return rejectWithValue('User not found');
    }
  }
);

export const signUpAction = createAsyncThunk(
  SIGN_UP,
  async (args, { rejectWithValue }) => {
    try {
      const response = await axiosClient().post("users/register/", args);

      console.log(response.data, "kkkkk");
      setToken(response.data.token_key); // Set token upon successful sign-up
      return response.data;
    } catch (error) {
      console.log(error, "error");
      return rejectWithValue("Omor");
    }
  }
);
