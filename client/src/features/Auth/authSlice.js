import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiHelper from "../../app/common/ApiHelper";

const initialState = {
  loggedInUserToken: null,
  status: "idle",
  error: null,
};

export const createAdminAsync = createAsyncThunk(
  "admin/create",
  async (adminData, { rejectWithValue }) => {
    try {
      const result = await apiHelper.createAdmin(adminData);
      if (result && result.data && result.status === 201) {
        return result.data;
      }
    } catch (error) {
      console.log("Create Admin Function", error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginAdminAsync = createAsyncThunk(
  "admin/login",
  async (adminData, { rejectWithValue }) => {
    try {
      const result = await apiHelper.loginAdmin(adminData);

      if (result) {
        return result;
      }

      // if (result && result.data && result.status === 200) {
      //   return result.data;
      // }
    } catch (error) {
      console.log("Create Admin Function", error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.loggedInUserToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAdminAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createAdminAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload;
      })
      .addCase(createAdminAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      })
      .addCase(loginAdminAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAdminAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUserToken = action.payload;
      })
      .addCase(loginAdminAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      });
  },
});

export const { logOut } = authSlice.actions;

export const selectLoggedInUserToken = (state) => state.auth.loggedInUserToken;
export const selectAdminError = (state) => state.auth.error;
// export const selectLoggedInUserToken = (state) => console.log(state);

export default authSlice.reducer;
