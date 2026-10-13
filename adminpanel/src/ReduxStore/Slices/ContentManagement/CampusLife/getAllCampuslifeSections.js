/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// getAllCampuslifeSections
// GETALLCAMPUSLIFESECTIONS


const GETALLCAMPUSLIFESECTIONS = createAsyncThunk(
  "getAllCampuslifeSections/getAllCampuslifeSections",
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

// getAllCampuslifeSectionsSlice
const getAllCampuslifeSectionsSlice = createSlice({
  name: "getAllCampuslifeSectionsSlice",
  initialState: {
    getAllCampuslifeSections: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetAllCampuslifeSections: (state) => {
      state.getAllCampuslifeSections.loading = false;
      state.getAllCampuslifeSections.error = false;
      state.getAllCampuslifeSections.data = [];
      state.getAllCampuslifeSections.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLCAMPUSLIFESECTIONS.fulfilled, (state, action) => {
      state.getAllCampuslifeSections = {
        ...state.getAllCampuslifeSections,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLCAMPUSLIFESECTIONS.pending, (state, action) => {
      state.getAllCampuslifeSections = {
        ...state.getAllCampuslifeSections,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLCAMPUSLIFESECTIONS.rejected, (state, action) => {
      state.getAllCampuslifeSections = {
        ...state.getAllCampuslifeSections,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllCampuslifeSectionsAction = {
  GETALLCAMPUSLIFESECTIONS,
};

export { getAllCampuslifeSectionsAction };
export default getAllCampuslifeSectionsSlice.reducer;
export const { setInitialStateOfgetAllCampuslifeSections } =
  getAllCampuslifeSectionsSlice.actions;
