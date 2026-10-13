

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// ADDABOUTUSSECTIONWITHAPPROVAL
// ADDABOUTUSSECTIONWITHAPPROVAL


const ADDABOUTUSSECTIONWITHAPPROVAL= createAsyncThunk(
  "addAboutUsSectionWithApproval/addAboutUsSectionWithApproval",
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
const addAboutUsSectionWithApprovalSlice = createSlice({
  name: "addAboutUsSectionWithApprovalSlice",
  initialState: {
    addAboutUsSectionWithApproval: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfaddAboutUsSectionWithApproval: (state) => {
        state.addAboutUsSectionWithApproval.loading = false
        state.addAboutUsSectionWithApproval.error = false
        state.addAboutUsSectionWithApproval.data = []
        state.addAboutUsSectionWithApproval.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(ADDABOUTUSSECTIONWITHAPPROVAL.fulfilled, (state, action) => {
      state.addAboutUsSectionWithApproval = {
        ...state.addAboutUsSectionWithApproval,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDABOUTUSSECTIONWITHAPPROVAL.pending, (state, action) => {
      state.addAboutUsSectionWithApproval = {
        ...state.addAboutUsSectionWithApproval,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDABOUTUSSECTIONWITHAPPROVAL.rejected, (state, action) => {
      state.addAboutUsSectionWithApproval = {
        ...state.addAboutUsSectionWithApproval,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addAboutUsSectionWithApprovalAction = {
    ADDABOUTUSSECTIONWITHAPPROVAL,
};

export { addAboutUsSectionWithApprovalAction };
export default addAboutUsSectionWithApprovalSlice.reducer;
export const {setInitialStateOfaddAboutUsSectionWithApproval} = addAboutUsSectionWithApprovalSlice.actions
