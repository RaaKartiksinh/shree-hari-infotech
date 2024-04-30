import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiHelper from "../app/common/ApiHelper";

const initialState = {
  status: "idle",
  siteData: [],
  error: null,
};

export const createSiteAsync = createAsyncThunk(
  "create/site",
  async (siteData, { rejectWithValue }) => {
    try {
      const result = await apiHelper.createSite(siteData);
      if (result && result.data && result.status === 201) {
        return result.data;
      }
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
      console.log(result);
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
// Delete Site Data
export const deleteSiteAsync = createAsyncThunk(
  "delete/site",
  async (siteId, { rejectWithValue }) => {
    try {
      const result = await apiHelper.deleteSite(siteId);
      console.log(result);
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
      const result = await apiHelper.updateSite(updateSiteData);
      console.log(result, "rresult");
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
        state.status = "idle";
        state.siteData.push(action.payload);
      })
      .addCase(createSiteAsync.rejected, (state, action) => {
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
        state.siteData = state.siteData.filter(
          (site) => site.id !== action.payload.id
        );
      })
      .addCase(deleteSiteAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      })
      .addCase(updateSiteAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateSiteAsync.fulfilled, (state, action) => {
        console.log("state" ,state)
        console.log("action" ,action)
        const editedSite = action.payload;
        const index = state.siteData.findIndex(
          (site) => site.id === editedSite.id
        );
        console.log(index)
        if (index !== -1) {
          state.siteData.splice(index, 1, editedSite);
        }
      })

      .addCase(updateSiteAsync.rejected, (state, action) => {
        console.log(" rejected state", state);
        console.log("rejected action", action);
        state.status = "idle";
        state.error = action.error.message;
        state.isSuccess = true;
      });
  },
});

// export const selectCount = (state) => state.counter.value;
export const selectSiteSiteData = (state) => state.site.siteData;
export const selectSiteError = (state) => state.site.error;
export const selectSiteStatus = (state) => state.site.status;

export default siteSlice.reducer;
