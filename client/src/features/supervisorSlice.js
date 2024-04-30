import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiHelper from "../app/common/ApiHelper";

const initialState = {
  status: "idle",
  supervisorData: [],
};

export const getSupervisorAsync = createAsyncThunk(
  "get/supervisor",
  async (_, { rejectWithValue }) => {
    try {
      const result = await apiHelper.getSupervisor();
      if (result && result.data) {
        return result.data;
      }
    } catch (error) {
      console.log("Error occurred while fetching site data:", error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createSupervisorAsync = createAsyncThunk(
  "create/supervisor",
  async (data, { rejectWithValue }) => {
    try {
      const result = await apiHelper.createSupervisor(data);
      console.log(result.data, "result");
      if (result && result.data) {
        return result.data;
      }
    } catch (error) {
      console.log("Error occurred while fetching site data:", error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const editSupervisorAsync = createAsyncThunk(
  "edit/supervisor",
  async (editSupervisordata, { rejectWithValue }) => {
    try {
      const result = await apiHelper.editSupervisor(editSupervisordata);
      console.log(result.data, "result");
      if (result && result.data) {
        return result.data;
      }
    } catch (error) {
      console.log("Error occurred while fetching site data:", error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteSupervisorAsync = createAsyncThunk(
  "delete/supervisor",
  async (supervisorId, { rejectWithValue }) => {
    try {
      const result = await apiHelper.deleteSupervisor(supervisorId);
      console.log(result.data, "resultdelete");
      if (result && result.data) {
        return result.data;
      }
    } catch (error) {
      console.log("Error occurred while fetching site data:", error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const supervisorSlice = createSlice({
  name: "supervisor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSupervisorAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSupervisorAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.supervisorData = action.payload;
      })
      .addCase(getSupervisorAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      })
      .addCase(createSupervisorAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createSupervisorAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.supervisorData.push(action.payload);
      })
      .addCase(createSupervisorAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      })
      .addCase(deleteSupervisorAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteSupervisorAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.supervisorData = state.supervisorData.filter(
          (supervisor) => supervisor.id !== action.payload.id
        );
      })
      .addCase(deleteSupervisorAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      })
      .addCase(editSupervisorAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editSupervisorAsync.fulfilled, (state, action) => {
        const editSupervisor = action.payload;
        const index = state.siteData.findIndex(
          (site) => site.id === editSupervisor.id
        );
        console.log(index)
        if (index !== -1) {
          state.siteData.splice(index, 1, editSupervisor);
        }
      })

      .addCase(editSupervisorAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
        state.isSuccess = true;
      });
  },
});

// export const selectCount = (state) => state.counter.value;

export default supervisorSlice.reducer;
export const selectSupervisorData = (state) => state.supervisor.supervisorData;
