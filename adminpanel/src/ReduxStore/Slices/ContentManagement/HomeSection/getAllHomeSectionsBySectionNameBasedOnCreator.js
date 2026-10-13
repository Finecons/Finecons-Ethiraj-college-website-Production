
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// GETALLAHOMESECTIONSBYSECTIONNAMEBASEDONCREATOR
// GETALLAHOMESECTIONSBYSECTIONNAMEBASEDONCREATOR


const GETALLAHOMESECTIONSBYSECTIONNAMEBASEDONCREATOR= createAsyncThunk(
  "getAllHomeSectionsBySectionNameBasedOnCreator/getAllHomeSectionsBySectionNameBasedOnCreator",
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
const getAllHomeSectionsBySectionNameBasedOnCreatorSlice = createSlice({
  name: "getAllHomeSectionsBySectionNameBasedOnCreatorSlice",
  initialState: {
    getAllHomeSectionsBySectionNameBasedOnCreator: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllHomeSectionsBySectionNameBasedOnCreator: (state) => {
        state.getAllHomeSectionsBySectionNameBasedOnCreator.loading = false
        state.getAllHomeSectionsBySectionNameBasedOnCreator.error = false
        state.getAllHomeSectionsBySectionNameBasedOnCreator.data = []
        state.getAllHomeSectionsBySectionNameBasedOnCreator.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLAHOMESECTIONSBYSECTIONNAMEBASEDONCREATOR.fulfilled, (state, action) => {
      state.getAllHomeSectionsBySectionNameBasedOnCreator = {
        ...state.getAllHomeSectionsBySectionNameBasedOnCreator,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLAHOMESECTIONSBYSECTIONNAMEBASEDONCREATOR.pending, (state, action) => {
      state.getAllHomeSectionsBySectionNameBasedOnCreator = {
        ...state.getAllHomeSectionsBySectionNameBasedOnCreator,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLAHOMESECTIONSBYSECTIONNAMEBASEDONCREATOR.rejected, (state, action) => {
      state.getAllHomeSectionsBySectionNameBasedOnCreator = {
        ...state.getAllHomeSectionsBySectionNameBasedOnCreator,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllHomeSectionsBySectionNameBasedOnCreatorAction = {
    GETALLAHOMESECTIONSBYSECTIONNAMEBASEDONCREATOR,
};

export { getAllHomeSectionsBySectionNameBasedOnCreatorAction };
export default getAllHomeSectionsBySectionNameBasedOnCreatorSlice.reducer;
export const {setInitialStateOfgetAllHomeSectionsBySectionNameBasedOnCreator} = getAllHomeSectionsBySectionNameBasedOnCreatorSlice.actions
