
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// GETALLABOUTUSSECTIONSBYSECTIONNAME
// GETALLABOUTUSSECTIONSBYSECTIONNAME


const GETALLABOUTUSSECTIONSBYSECTIONNAME= createAsyncThunk(
  "getAllAboutUsSectionsBySectionName/getAllAboutUsSectionsBySectionName",
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
const getAllAboutUsSectionsBySectionNameSlice = createSlice({
  name: "getAllAboutUsSectionsBySectionNameSlice",
  initialState: {
    getAllAboutUsSectionsBySectionName: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllAboutUsSectionsBySectionName: (state) => {
        state.getAllAboutUsSectionsBySectionName.loading = false
        state.getAllAboutUsSectionsBySectionName.error = false
        state.getAllAboutUsSectionsBySectionName.data = []
        state.getAllAboutUsSectionsBySectionName.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLABOUTUSSECTIONSBYSECTIONNAME.fulfilled, (state, action) => {
      state.getAllAboutUsSectionsBySectionName = {
        ...state.getAllAboutUsSectionsBySectionName,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLABOUTUSSECTIONSBYSECTIONNAME.pending, (state, action) => {
      state.getAllAboutUsSectionsBySectionName = {
        ...state.getAllAboutUsSectionsBySectionName,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLABOUTUSSECTIONSBYSECTIONNAME.rejected, (state, action) => {
      state.getAllAboutUsSectionsBySectionName = {
        ...state.getAllAboutUsSectionsBySectionName,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllAboutUsSectionsBySectionNameAction = {
    GETALLABOUTUSSECTIONSBYSECTIONNAME,
};

export { getAllAboutUsSectionsBySectionNameAction };
export default getAllAboutUsSectionsBySectionNameSlice.reducer;
export const {setInitialStateOfgetAllAboutUsSectionsBySectionName} = getAllAboutUsSectionsBySectionNameSlice.actions
