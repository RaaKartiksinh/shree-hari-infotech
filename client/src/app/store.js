import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/authSlice";
import siteReducer from "../features/siteSlice";
import supervisorReducer from "../features/supervisorSlice";
import CommonRedycer from "../features/commonSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    site: siteReducer,
    supervisor: supervisorReducer,
    Common: CommonRedycer,
  },
});
