
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// GETALLHOMESECTIONSWITHCREATORBYSECTIONNAME
// GETALLHOMESECTIONSWITHCREATORBYSECTIONNAME


const GETALLHOMESECTIONSWITHCREATORBYSECTIONNAME= createAsyncThunk(
  "getAllHomeSectionsWithCreatorBySectionName/getAllHomeSectionsWithCreatorBySectionName",
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
const getAllHomeSectionsWithCreatorBySectionNameSlice = createSlice({
  name: "getAllHomeSectionsWithCreatorBySectionNameSlice",
  initialState: {
    getAllHomeSectionsWithCreatorBySectionName: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllHomeSectionsWithCreatorBySectionName: (state) => {
        state.getAllHomeSectionsWithCreatorBySectionName.loading = false
        state.getAllHomeSectionsWithCreatorBySectionName.error = false
        state.getAllHomeSectionsWithCreatorBySectionName.data = []
        state.getAllHomeSectionsWithCreatorBySectionName.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLHOMESECTIONSWITHCREATORBYSECTIONNAME.fulfilled, (state, action) => {
      state.getAllHomeSectionsWithCreatorBySectionName = {
        ...state.getAllHomeSectionsWithCreatorBySectionName,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLHOMESECTIONSWITHCREATORBYSECTIONNAME.pending, (state, action) => {
      state.getAllHomeSectionsWithCreatorBySectionName = {
        ...state.getAllHomeSectionsWithCreatorBySectionName,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLHOMESECTIONSWITHCREATORBYSECTIONNAME.rejected, (state, action) => {
      state.getAllHomeSectionsWithCreatorBySectionName = {
        ...state.getAllHomeSectionsWithCreatorBySectionName,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllHomeSectionsWithCreatorBySectionNameAction = {
    GETALLHOMESECTIONSWITHCREATORBYSECTIONNAME,
};

export { getAllHomeSectionsWithCreatorBySectionNameAction };
export default getAllHomeSectionsWithCreatorBySectionNameSlice.reducer;
export const {setInitialStateOfgetAllHomeSectionsWithCreatorBySectionName} = getAllHomeSectionsWithCreatorBySectionNameSlice.actions
