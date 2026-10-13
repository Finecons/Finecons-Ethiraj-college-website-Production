/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getAllResearchSectionsBySectionName
// GETALLRESEARCHSECTIONSBYSECTIONNAME


const GETALLRESEARCHSECTIONSBYSECTIONNAME= createAsyncThunk(
  "getAllResearchSectionsBySectionName/getAllResearchSectionsBySectionName",
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

// getAllResearchSectionsBySectionNameSlice
const getAllResearchSectionsBySectionNameSlice = createSlice({
  name: "getAllResearchSectionsBySectionNameSlice",
  initialState: {
    getAllResearchSectionsBySectionName: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllResearchSectionsBySectionName: (state) => {
        state.getAllResearchSectionsBySectionName.loading = false
        state.getAllResearchSectionsBySectionName.error = false
        state.getAllResearchSectionsBySectionName.data = []
        state.getAllResearchSectionsBySectionName.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLRESEARCHSECTIONSBYSECTIONNAME.fulfilled, (state, action) => {
      state.getAllResearchSectionsBySectionName = {
        ...state.getAllResearchSectionsBySectionName,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLRESEARCHSECTIONSBYSECTIONNAME.pending, (state, action) => {
      state.getAllResearchSectionsBySectionName = {
        ...state.getAllResearchSectionsBySectionName,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLRESEARCHSECTIONSBYSECTIONNAME.rejected, (state, action) => {
      state.getAllResearchSectionsBySectionName = {
        ...state.getAllResearchSectionsBySectionName,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllResearchSectionsBySectionNameAction = {
    GETALLRESEARCHSECTIONSBYSECTIONNAME,
};

export { getAllResearchSectionsBySectionNameAction };
export default getAllResearchSectionsBySectionNameSlice.reducer;
export const {setInitialStateOfgetAllResearchSectionsBySectionName} = getAllResearchSectionsBySectionNameSlice.actions
