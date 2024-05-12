import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiHelper from "../app/common/ApiHelper";

const initialState = {
  status: "idle",
  error: null,
  supervisorData: [],
  supervisorAttendance: [],
  supervisorAttendanceStatus: "idle",
  supervisorAttendanceError: "idle",
};

// Get supervisor
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

// Create Supervisor
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
// Update Supervisor
export const editSupervisorAsync = createAsyncThunk(
  "edit/supervisor",
  async (editSupervisordata, { rejectWithValue }) => {
    try {
      const result = await apiHelper.editSupervisor(editSupervisordata);
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

// Delete Supervisor
export const deleteSupervisorAsync = createAsyncThunk(
  "delete/supervisor",
  async (supervisor_id, { rejectWithValue, dispatch }) => {
    try {
      const result = await apiHelper.deleteSupervisor(supervisor_id);
      console.log(result.data, "resultdelete");
      if (result && result.data) {
        dispatch(getSupervisorAsync());
        // return result.data;
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
// Attendance Supervisor
export const getSupervisorAttendanceAsync = createAsyncThunk(
  "get/supervisorAttendance",
  async (s_id, { rejectWithValue }) => {
    try {
      const result = await apiHelper.getSupervisorAttendance(s_id);
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
        state.supervisorData.push(action.payload.supervisor);
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
        // state.supervisorData = state.supervisorData.filter(
        // (supervisor) => supervisor.supervisor_id !== action.payload.supervisor_id
        // );
      })
      .addCase(deleteSupervisorAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      })
      .addCase(editSupervisorAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editSupervisorAsync.fulfilled, (state, action) => {
        const editSupervisor = action.payload.supervisor;
        const index = state.supervisorData.findIndex(
          (supervisor) =>
            supervisor.supervisor_id === editSupervisor.supervisor_id
        );
        if (index !== -1) {
          state.supervisorData.splice(index, 1, editSupervisor);
        }
      })

      .addCase(editSupervisorAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
        state.isSuccess = true;
      })
      .addCase(getSupervisorAttendanceAsync.pending, (state) => {
        state.supervisorAttendanceStatus = "loading";
      })
      .addCase(getSupervisorAttendanceAsync.fulfilled, (state, action) => {
        console.log("action ====> ", action);
        state.supervisorAttendanceStatus = "idle";
        state.supervisorAttendance = action.payload;
      })
      .addCase(getSupervisorAttendanceAsync.rejected, (state, action) => {
        state.supervisorAttendanceStatus = "idle";
        state.supervisorAttendanceError = action.error.message;
      });
  },
});

// export const selectCount = (state) => state.counter.value;

export default supervisorSlice.reducer;
export const selectSupervisorData = (state) => state.supervisor.supervisorData;
export const selectSupervisorSatatus = (state) => state.supervisor.status;
export const selectSupervisorAttendance = (state) =>
  state.supervisor.supervisorAttendance;
export const selectSupervisorAttendanceStatus = (state) =>
  state.supervisor.supervisorAttendanceStatus;

// getSupervisorAttendanceAsync
