import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import inspectionsReducer from "./inspectionsSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    inspections: inspectionsReducer,
  },
});

export default store;
