

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// UPDATEABOUTUSSECTIONFORREAPPROVAL
// UPDATEABOUTUSSECTIONFORREAPPROVAL


const UPDATEABOUTUSSECTIONFORREAPPROVAL= createAsyncThunk(
  "updateAboutUsSectionForReApproval/updateAboutUsSectionForReApproval",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data.Message,
        data: data?.data?.data,
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

// PublishPostSlice
const updateAboutUsSectionForReApprovalSlice = createSlice({
  name: "updateAboutUsSectionForReApprovalSlice",
  initialState: {
    updateAboutUsSectionForReApproval: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfupdateAboutUsSectionForReApproval: (state) => {
        state.updateAboutUsSectionForReApproval.loading = false
        state.updateAboutUsSectionForReApproval.error = false
        state.updateAboutUsSectionForReApproval.data = []
        state.updateAboutUsSectionForReApproval.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEABOUTUSSECTIONFORREAPPROVAL.fulfilled, (state, action) => {
      state.updateAboutUsSectionForReApproval = {
        ...state.updateAboutUsSectionForReApproval,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEABOUTUSSECTIONFORREAPPROVAL.pending, (state, action) => {
      state.updateAboutUsSectionForReApproval = {
        ...state.updateAboutUsSectionForReApproval,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEABOUTUSSECTIONFORREAPPROVAL.rejected, (state, action) => {
      state.updateAboutUsSectionForReApproval = {
        ...state.updateAboutUsSectionForReApproval,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateAboutUsSectionForReApprovalAction = {
    UPDATEABOUTUSSECTIONFORREAPPROVAL,
};

export { updateAboutUsSectionForReApprovalAction };
export default updateAboutUsSectionForReApprovalSlice.reducer;
export const {setInitialStateOfupdateAboutUsSectionForReApproval} = updateAboutUsSectionForReApprovalSlice.actions
