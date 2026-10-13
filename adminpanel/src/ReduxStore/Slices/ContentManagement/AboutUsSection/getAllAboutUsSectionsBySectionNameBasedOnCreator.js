
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// GETALLABOUTUSSECTIONSBYSECTIONNAMEBASEDONCREATOR
// GETALLABOUTUSSECTIONSBYSECTIONNAMEBASEDONCREATOR


const GETALLABOUTUSSECTIONSBYSECTIONNAMEBASEDONCREATOR= createAsyncThunk(
  "getAllAboutUsSectionsBySectionNameBasedOnCreator/getAllAboutUsSectionsBySectionNameBasedOnCreator",
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
const getAllAboutUsSectionsBySectionNameBasedOnCreatorSlice = createSlice({
  name: "getAllAboutUsSectionsBySectionNameBasedOnCreatorSlice",
  initialState: {
    getAllAboutUsSectionsBySectionNameBasedOnCreator: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllAboutUsSectionsBySectionNameBasedOnCreator: (state) => {
        state.getAllAboutUsSectionsBySectionNameBasedOnCreator.loading = false
        state.getAllAboutUsSectionsBySectionNameBasedOnCreator.error = false
        state.getAllAboutUsSectionsBySectionNameBasedOnCreator.data = []
        state.getAllAboutUsSectionsBySectionNameBasedOnCreator.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLABOUTUSSECTIONSBYSECTIONNAMEBASEDONCREATOR.fulfilled, (state, action) => {
      state.getAllAboutUsSectionsBySectionNameBasedOnCreator = {
        ...state.getAllAboutUsSectionsBySectionNameBasedOnCreator,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLABOUTUSSECTIONSBYSECTIONNAMEBASEDONCREATOR.pending, (state, action) => {
      state.getAllAboutUsSectionsBySectionNameBasedOnCreator = {
        ...state.getAllAboutUsSectionsBySectionNameBasedOnCreator,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLABOUTUSSECTIONSBYSECTIONNAMEBASEDONCREATOR.rejected, (state, action) => {
      state.getAllAboutUsSectionsBySectionNameBasedOnCreator = {
        ...state.getAllAboutUsSectionsBySectionNameBasedOnCreator,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllAboutUsSectionsBySectionNameBasedOnCreatorAction = {
    GETALLABOUTUSSECTIONSBYSECTIONNAMEBASEDONCREATOR,
};

export { getAllAboutUsSectionsBySectionNameBasedOnCreatorAction };
export default getAllAboutUsSectionsBySectionNameBasedOnCreatorSlice.reducer;
export const {setInitialStateOfgetAllAboutUsSectionsBySectionNameBasedOnCreator} = getAllAboutUsSectionsBySectionNameBasedOnCreatorSlice.actions
