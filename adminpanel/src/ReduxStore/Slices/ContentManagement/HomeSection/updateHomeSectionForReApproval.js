

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// UPDATEHOMESECTIONFORREAPPROVAL
// UPDATEHOMESECTIONFORREAPPROVAL


const UPDATEHOMESECTIONFORREAPPROVAL= createAsyncThunk(
  "updateHomeSectionForReApproval/updateHomeSectionForReApproval",
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
const updateHomeSectionForReApprovalSlice = createSlice({
  name: "updateHomeSectionForReApprovalSlice",
  initialState: {
    updateHomeSectionForReApproval: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfupdateHomeSectionForReApproval: (state) => {
        state.updateHomeSectionForReApproval.loading = false
        state.updateHomeSectionForReApproval.error = false
        state.updateHomeSectionForReApproval.data = []
        state.updateHomeSectionForReApproval.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEHOMESECTIONFORREAPPROVAL.fulfilled, (state, action) => {
      state.updateHomeSectionForReApproval = {
        ...state.updateHomeSectionForReApproval,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEHOMESECTIONFORREAPPROVAL.pending, (state, action) => {
      state.updateHomeSectionForReApproval = {
        ...state.updateHomeSectionForReApproval,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEHOMESECTIONFORREAPPROVAL.rejected, (state, action) => {
      state.updateHomeSectionForReApproval = {
        ...state.updateHomeSectionForReApproval,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateHomeSectionForReApprovalAction = {
    UPDATEHOMESECTIONFORREAPPROVAL,
};

export { updateHomeSectionForReApprovalAction };
export default updateHomeSectionForReApprovalSlice.reducer;
export const {setInitialStateOfupdateHomeSectionForReApproval} = updateHomeSectionForReApprovalSlice.actions
