
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// getAllIQACSections
// GETALLIQACSECTIONS


const GETALLIQACSECTIONS= createAsyncThunk(
  "getAllIQACSections/getAllIQACSections",
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
const getAllIQACSectionsSlice = createSlice({
  name: "getAllIQACSectionsSlice",
  initialState: {
    getAllIQACSections: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllIQACSections: (state) => {
        state.getAllIQACSections.loading = false
        state.getAllIQACSections.error = false
        state.getAllIQACSections.data = []
        state.getAllIQACSections.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLIQACSECTIONS.fulfilled, (state, action) => {
      state.getAllIQACSections = {
        ...state.getAllIQACSections,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLIQACSECTIONS.pending, (state, action) => {
      state.getAllIQACSections = {
        ...state.getAllIQACSections,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLIQACSECTIONS.rejected, (state, action) => {
      state.getAllIQACSections = {
        ...state.getAllIQACSections,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllIQACSectionsAction = {
    GETALLIQACSECTIONS,
};

export { getAllIQACSectionsAction };
export default getAllIQACSectionsSlice.reducer;
export const {setInitialStateOfgetAllIQACSections} = getAllIQACSectionsSlice.actions
