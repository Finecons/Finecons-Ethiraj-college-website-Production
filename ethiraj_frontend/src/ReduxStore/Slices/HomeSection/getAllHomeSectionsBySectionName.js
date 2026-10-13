
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getAllHomeSectionsBySectionName
// getAllHomeSectionsBySectionName


const GETALLHOMESECTIONSBYSECTIONNAME= createAsyncThunk(
  "getAllHomeSectionsBySectionName/getAllHomeSectionsBySectionName",
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
const getAllHomeSectionsBySectionNameSlice = createSlice({
  name: "getAllHomeSectionsBySectionNameSlice",
  initialState: {
    getAllHomeSectionsBySectionName: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllHomeSectionsBySectionName: (state) => {
        state.getAllHomeSectionsBySectionName.loading = false
        state.getAllHomeSectionsBySectionName.error = false
        state.getAllHomeSectionsBySectionName.data = []
        state.getAllHomeSectionsBySectionName.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLHOMESECTIONSBYSECTIONNAME.fulfilled, (state, action) => {
      state.getAllHomeSectionsBySectionName = {
        ...state.getAllHomeSectionsBySectionName,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLHOMESECTIONSBYSECTIONNAME.pending, (state, action) => {
      state.getAllHomeSectionsBySectionName = {
        ...state.getAllHomeSectionsBySectionName,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLHOMESECTIONSBYSECTIONNAME.rejected, (state, action) => {
      state.getAllHomeSectionsBySectionName = {
        ...state.getAllHomeSectionsBySectionName,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllHomeSectionsBySectionNameAction = {
    GETALLHOMESECTIONSBYSECTIONNAME,
};

export { getAllHomeSectionsBySectionNameAction };
export default getAllHomeSectionsBySectionNameSlice.reducer;
export const {setInitialStateOfgetAllHomeSectionsBySectionName} = getAllHomeSectionsBySectionNameSlice.actions
