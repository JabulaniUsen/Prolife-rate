import { createSlice } from "@reduxjs/toolkit";
import { 
    signInAction,
    signUpAction
} from "../actions/Auth";
const initialState = {
  signingInStatus: "idle",
  signingInSuccess: "",
  signingInError: "",

  signingUpStatus: "idle",
  signingUpSuccess: "",
  signingUpError: "",
  adminData: null,
  student:null
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    clearLoginStatus(state) {
      state.signingInStatus = "idle";
      state.signingInSuccess = "";
      state.signingInError = "";
    },

    setStudent(state) {
      state.signingInStatus = "idle";
      state.signingInSuccess = "";
      state.signingInError = "";
    },

    clearSignUpStatus(state) {
        state.signingUpStatus = "idle";
        state.signingUpSuccess = "";
        state.signingUpError = "";
      },

    clearResetPasswordStatus(state) {
      state.resetSubAdminPasswordStatus = "idle";
      state.resetSubAdminPasswordSuccess = "";
      state.resetSubAdminPasswordError = "";
    },

    clearUserData(state) {
      state.adminData = null;
    },


  },

  extraReducers: (builder) => {
    // ======SIGNING STATUS ACTION=======//
    builder
      .addCase(signInAction.pending, (state) => {
        state.signingInStatus = "loading";
      })
      .addCase(signInAction.fulfilled, (state, { payload }) => {
        state.signingInStatus = "completed";
        // update redux state
        state.adminData = payload;
        console.log(payload, "gggggggg");
      })
      .addCase(signInAction.rejected, (state, { payload }) => {
        state.signingInStatus = "failed";
        // console.log(payload, "error message");
        state.signingInError = payload;
      });

    
    builder
      .addCase(signUpAction.pending, (state) => {
        state.signUpActionStatus = "loading";
      })
      .addCase(signUpAction.fulfilled, (state, { payload }) => {
        state.signUpActionStatus = "completed";
      })
      .addCase(signUpAction.rejected, (state, { payload }) => {
        state.signUpActionStatus = "failed";

        state.signUpActionError = payload;
      });
  },
});

export const {
  clearLoginStatus,
  clearSignUpStatus,
//   clearAdminLoginStatus,
//   clearUserData,
//   clearSocialSignUpStatus,
//   clearRequestOtpStatus,
//   clearConfirmChangeOfPasswordStatus,
//   clearResetPasswordStatus,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;