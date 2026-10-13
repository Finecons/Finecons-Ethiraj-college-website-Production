
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getAllIQACSectionsBySectionName
// GETALLIQACSECTIONSBYSECTIONNAME


const GETALLIQACSECTIONSBYSECTIONNAME= createAsyncThunk(
  "getAllIQACSectionsBySectionName/getAllIQACSectionsBySectionName",
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
const getAllIQACSectionsBySectionNameSlice = createSlice({
  name: "getAllIQACSectionsBySectionNameSlice",
  initialState: {
    getAllIQACSectionsBySectionName: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllIQACSectionsBySectionName: (state) => {
        state.getAllIQACSectionsBySectionName.loading = false
        state.getAllIQACSectionsBySectionName.error = false
        state.getAllIQACSectionsBySectionName.data = []
        state.getAllIQACSectionsBySectionName.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLIQACSECTIONSBYSECTIONNAME.fulfilled, (state, action) => {
      state.getAllIQACSectionsBySectionName = {
        ...state.getAllIQACSectionsBySectionName,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLIQACSECTIONSBYSECTIONNAME.pending, (state, action) => {
      state.getAllIQACSectionsBySectionName = {
        ...state.getAllIQACSectionsBySectionName,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLIQACSECTIONSBYSECTIONNAME.rejected, (state, action) => {
      state.getAllIQACSectionsBySectionName = {
        ...state.getAllIQACSectionsBySectionName,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllIQACSectionsBySectionNameAction = {
    GETALLIQACSECTIONSBYSECTIONNAME,
};

export { getAllIQACSectionsBySectionNameAction };
export default getAllIQACSectionsBySectionNameSlice.reducer;
export const {setInitialStateOfgetAllIQACSectionsBySectionName} = getAllIQACSectionsBySectionNameSlice.actions
