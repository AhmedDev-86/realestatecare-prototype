import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  step: 1,
  user: null,
  error: null,
};

const CORRECT_USERNAME = "inspector";
const CORRECT_PASSWORD = "Real2025!";
const CORRECT_CODE = "123456";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStep1(state, action) {
      const { username, password } = action.payload;
      if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
        state.step = 2;
        state.user = { username };
        state.error = null;
      } else {
        state.error = "Ongeldige gebruikersnaam of wachtwoord.";
      }
    },
    verifyCode(state, action) {
      const { code } = action.payload;
      if (code === CORRECT_CODE) {
        state.isAuthenticated = true;
        state.step = 1;
        state.error = null;
      } else {
        state.error = "Ongeldige verificatiecode.";
      }
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.step = 1;
      state.error = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { loginStep1, verifyCode, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
