import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axios";
import { setToken } from "../storage";
const SIGN_IN = "authentication:SIGN_IN";
const SIGN_UP = "authentication:SIGN_UP";
const RESET_SUB_ADMIN_PASSWORD = "admin:RESET_SUB_ADMIN_PASSWORD";
// const FORGOT_PASSWORD = "authentication:FORGOT_PASSWORD";
// const CONFIRM_CHANGE_PASSWORD = "authentication:CONFIRM_CHANGE_PASSWORD";

export const signInAction = createAsyncThunk(
    SIGN_IN,
    async (args, { rejectWithValue }) => {
      try {
        const response = await axiosClient().post("users/login/", args);
  
        console.log(response.data, "kkkkk");
        // setToken(response.data.token_key);
        return response.data;
      } catch (error) {
        console.log(error, "error");
        return rejectWithValue("Account not found");
        // return rejectWithValue(error.response.data);
      }
    }
  );

  export const signUpAction = createAsyncThunk(
    SIGN_UP,
    async (args, { rejectWithValue }) => {
      try {
        const response = await axiosClient().post("users/register/", args);
  
        console.log(response.data, "kkkkk");
        setToken(response.data.token_key);
        return response.data;
      } catch (error) {
        console.log(error, "error");
        return rejectWithValue("Omor");
        // return rejectWithValue(error.response.data.message);
      }
    }
  );