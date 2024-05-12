import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiHelper from "../app/common/ApiHelper";

const initialState = {
  status: "idle",
  siteData: [],
  error: null,
  siteSupervisorList: [],
  siteSuperVisorStatus: "idle",
};

export const getSiteSupervisorListAsync = createAsyncThunk(
  "create/siteSupervisorList",
  async (_, { rejectWithValue }) => {
    try {
      const result = await apiHelper.getSiteSupervisorList();
      console.log(result.data);
      if (result && result.data) {
        return result.data;
      }
    } catch (error) {
      console.log("getSiteSupervisorListAsync", error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createSiteAsync = createAsyncThunk(
  "create/site",
  async (siteData, { rejectWithValue }) => {
    try {
      const result = await apiHelper.createSite(siteData);
      if (result && result.data && result.data.status === "CREATED") {
        return result.data;
      } else rejectWithValue(result.data.message);
    } catch (error) {
      console.log("Create site Function", error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// Get Site Data
export const getSiteAsync = createAsyncThunk(
  "get/site",
  async (_, { rejectWithValue }) => {
    try {
      const result = await apiHelper.getSite();
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

// Updatre Site Data
export const updateSiteAsync = createAsyncThunk(
  "edit/site",
  async (updateSiteData, { rejectWithValue }) => {
    try {
      let { id, values } = updateSiteData;
      await delete values["site_id"];
      const result = await apiHelper.updateSite(id, values);
      console.log(result);
      if (result && result.data && result.data.message === "updated") {
        return result.data;
      }
      return rejectWithValue(result.data.message);
    } catch (error) {
      console.log("Error occurred while fetching site data:", error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete Site Data
export const deleteSiteAsync = createAsyncThunk(
  "delete/site",
  async (siteId, { rejectWithValue, dispatch }) => {
    try {
      const result = await apiHelper.deleteSite(siteId);
      if (result && result.data) {
        dispatch(getSiteAsync());
        return;
      }
    } catch (error) {
      console.log("Error occurred while deleting site:", error);
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSiteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createSiteAsync.fulfilled, (state, action) => {
        console.log("action  fulfilled", action);
        state.status = "idle";
        state.siteData.push(action.payload.site);
      })
      .addCase(createSiteAsync.rejected, (state, action) => {
        console.log("action  rejected", action);
        state.status = "idle";
        state.error = action.error.message;
      })
      .addCase(getSiteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSiteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.siteData = action.payload;
      })
      .addCase(getSiteAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      })
      .addCase(deleteSiteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteSiteAsync.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(deleteSiteAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      })
      .addCase(updateSiteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateSiteAsync.fulfilled, (state, action) => {
        console.log("action ", action);
        const editedSite = action.payload.site;
        const index = state.siteData.findIndex(
          (site) => site.site_id === editedSite.site_id
        );
        if (index !== -1) {
          state.siteData.splice(index, 1, editedSite);
        }
        state.status = "idle";
      })
      .addCase(updateSiteAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
        state.isSuccess = true;
      })
      .addCase(getSiteSupervisorListAsync.pending, (state) => {
        state.siteSuperVisorStatus = "loading";
      })
      .addCase(getSiteSupervisorListAsync.fulfilled, (state, action) => {
        state.siteSuperVisorStatus = "idle";
        state.siteSupervisorList = action.payload;
      });
  },
});

// export const selectCount = (state) => state.counter.value;
export const selectSiteSiteData = (state) => state.site.siteData;
export const selectSiteError = (state) => state.site.error;
export const selectSiteStatus = (state) => state.site.status;
export const selectSiteSupervisorList = (state) =>
  state.site.siteSupervisorList;
export const selectSiteSupervisorStatus = (state) =>
  state.site.siteSupervisorList;

export default siteSlice.reducer;
