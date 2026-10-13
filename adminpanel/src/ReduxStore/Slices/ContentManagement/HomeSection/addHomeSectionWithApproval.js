

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// ADDHOMESECTIONWITHAPPROVAL
// ADDHOMESECTIONWITHAPPROVAL


const ADDHOMESECTIONWITHAPPROVAL= createAsyncThunk(
  "addHomeSectionWithApproval/addHomeSectionWithApproval",
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
const addHomeSectionWithApprovalSlice = createSlice({
  name: "addHomeSectionWithApprovalSlice",
  initialState: {
    addHomeSectionWithApproval: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfaddHomeSectionWithApproval: (state) => {
        state.addHomeSectionWithApproval.loading = false
        state.addHomeSectionWithApproval.error = false
        state.addHomeSectionWithApproval.data = []
        state.addHomeSectionWithApproval.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(ADDHOMESECTIONWITHAPPROVAL.fulfilled, (state, action) => {
      state.addHomeSectionWithApproval = {
        ...state.addHomeSectionWithApproval,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDHOMESECTIONWITHAPPROVAL.pending, (state, action) => {
      state.addHomeSectionWithApproval = {
        ...state.addHomeSectionWithApproval,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDHOMESECTIONWITHAPPROVAL.rejected, (state, action) => {
      state.addHomeSectionWithApproval = {
        ...state.addHomeSectionWithApproval,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addHomeSectionWithApprovalAction = {
    ADDHOMESECTIONWITHAPPROVAL,
};

export { addHomeSectionWithApprovalAction };
export default addHomeSectionWithApprovalSlice.reducer;
export const {setInitialStateOfaddHomeSectionWithApproval} = addHomeSectionWithApprovalSlice.actions
