/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// getAllCampuslifeSectionsBySectionName
// GETALLCAMPUSLIFESECTIONSBYSECTIONNAME


const GETALLCAMPUSLIFESECTIONSBYSECTIONNAME = createAsyncThunk(
  "getAllCampuslifeSectionsBySectionName/getAllCampuslifeSectionsBySectionName",
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

// getAllCampuslifeSectionsBySectionNameSlice
const getAllCampuslifeSectionsBySectionNameSlice = createSlice({
  name: "getAllCampuslifeSectionsBySectionNameSlice",
  initialState: {
    getAllCampuslifeSectionsBySectionName: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetAllCampuslifeSectionsBySectionName: (state) => {
      state.getAllCampuslifeSectionsBySectionName.loading = false;
      state.getAllCampuslifeSectionsBySectionName.error = false;
      state.getAllCampuslifeSectionsBySectionName.data = [];
      state.getAllCampuslifeSectionsBySectionName.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLCAMPUSLIFESECTIONSBYSECTIONNAME.fulfilled, (state, action) => {
      state.getAllCampuslifeSectionsBySectionName = {
        ...state.getAllCampuslifeSectionsBySectionName,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLCAMPUSLIFESECTIONSBYSECTIONNAME.pending, (state, action) => {
      state.getAllCampuslifeSectionsBySectionName = {
        ...state.getAllCampuslifeSectionsBySectionName,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLCAMPUSLIFESECTIONSBYSECTIONNAME.rejected, (state, action) => {
      state.getAllCampuslifeSectionsBySectionName = {
        ...state.getAllCampuslifeSectionsBySectionName,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllCampuslifeSectionsBySectionNameAction = {
  GETALLCAMPUSLIFESECTIONSBYSECTIONNAME,
};

export { getAllCampuslifeSectionsBySectionNameAction };
export default getAllCampuslifeSectionsBySectionNameSlice.reducer;
export const { setInitialStateOfgetAllCampuslifeSectionsBySectionName } =
  getAllCampuslifeSectionsBySectionNameSlice.actions;
