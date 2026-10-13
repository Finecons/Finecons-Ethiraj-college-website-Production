
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// GETALLABOUTUSSECTIONSWITHCREATORBYSECTIONNAME
// GETALLABOUTUSSECTIONSWITHCREATORBYSECTIONNAME


const GETALLABOUTUSSECTIONSWITHCREATORBYSECTIONNAME= createAsyncThunk(
  "getAllAboutUsSectionsWithCreatorBySectionName/getAllAboutUsSectionsWithCreatorBySectionName",
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
const getAllAboutUsSectionsWithCreatorBySectionNameSlice = createSlice({
  name: "getAllAboutUsSectionsWithCreatorBySectionNameSlice",
  initialState: {
    getAllAboutUsSectionsWithCreatorBySectionName: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllAboutUsSectionsWithCreatorBySectionName: (state) => {
        state.getAllAboutUsSectionsWithCreatorBySectionName.loading = false
        state.getAllAboutUsSectionsWithCreatorBySectionName.error = false
        state.getAllAboutUsSectionsWithCreatorBySectionName.data = []
        state.getAllAboutUsSectionsWithCreatorBySectionName.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLABOUTUSSECTIONSWITHCREATORBYSECTIONNAME.fulfilled, (state, action) => {
      state.getAllAboutUsSectionsWithCreatorBySectionName = {
        ...state.getAllAboutUsSectionsWithCreatorBySectionName,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLABOUTUSSECTIONSWITHCREATORBYSECTIONNAME.pending, (state, action) => {
      state.getAllAboutUsSectionsWithCreatorBySectionName = {
        ...state.getAllAboutUsSectionsWithCreatorBySectionName,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLABOUTUSSECTIONSWITHCREATORBYSECTIONNAME.rejected, (state, action) => {
      state.getAllAboutUsSectionsWithCreatorBySectionName = {
        ...state.getAllAboutUsSectionsWithCreatorBySectionName,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllAboutUsSectionsWithCreatorBySectionNameAction = {
    GETALLABOUTUSSECTIONSWITHCREATORBYSECTIONNAME,
};

export { getAllAboutUsSectionsWithCreatorBySectionNameAction };
export default getAllAboutUsSectionsWithCreatorBySectionNameSlice.reducer;
export const {setInitialStateOfgetAllAboutUsSectionsWithCreatorBySectionName} = getAllAboutUsSectionsWithCreatorBySectionNameSlice.actions
