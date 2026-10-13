
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getAllAboutUsSections
// getAllAboutUsSections


const GETALLABOUTUSSECTIONS= createAsyncThunk(
  "getAllAboutUsSections/getAllAboutUsSections",
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
const getAllAboutUsSectionsSlice = createSlice({
  name: "getAllAboutUsSectionsSlice",
  initialState: {
    getAllAboutUsSections: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllAboutUsSections: (state) => {
        state.getAllAboutUsSections.loading = false
        state.getAllAboutUsSections.error = false
        state.getAllAboutUsSections.data = []
        state.getAllAboutUsSections.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLABOUTUSSECTIONS.fulfilled, (state, action) => {
      state.getAllAboutUsSections = {
        ...state.getAllAboutUsSections,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLABOUTUSSECTIONS.pending, (state, action) => {
      state.getAllAboutUsSections = {
        ...state.getAllAboutUsSections,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLABOUTUSSECTIONS.rejected, (state, action) => {
      state.getAllAboutUsSections = {
        ...state.getAllAboutUsSections,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllAboutUsSectionsAction = {
    GETALLABOUTUSSECTIONS,
};

export { getAllAboutUsSectionsAction };
export default getAllAboutUsSectionsSlice.reducer;
export const {setInitialStateOfgetAllAboutUsSections} = getAllAboutUsSectionsSlice.actions
