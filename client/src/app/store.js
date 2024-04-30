import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import siteReducer from "../features/siteSlice";
import supervisorReducer from "../features/supervisorSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    site: siteReducer,
    supervisor: supervisorReducer,
  },
});
