import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
  siteCounterComplit: true,
  supervisorCounterComplit: true,
};

export const CommonSlice = createSlice({
  name: "Common",
  initialState,
  reducers: {
    setSiteCounterComplit: (state) => {
      state.siteCounterComplit = false;
    },
    setSupervisorCounterComplit: (state) => {
      state.supervisorCounterComplit = false;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(incrementAsync.pending, (state) => {
  //         state.status = "loading";
  //       })
  //       .addCase(incrementAsync.fulfilled, (state, action) => {
  //         state.status = "idle";
  //         state.value += action.payload;
  //       });
  //   },
});

export const { setSiteCounterComplit,setSupervisorCounterComplit } = CommonSlice.actions;
export const selectSiteCountComplit = (state) => state.Common.siteCounterComplit;
export const selectSupervisorCountComplit = (state) => state.Common.supervisorCounterComplit;

export default CommonSlice.reducer;
