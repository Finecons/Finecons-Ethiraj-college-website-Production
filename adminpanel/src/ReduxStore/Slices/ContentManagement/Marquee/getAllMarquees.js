/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// GETALLMARQUEES
const GETALLMARQUEES = createAsyncThunk(
  "getAllMarquees/getAllMarquees",
  async (
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

const getAllMarqueesSlice = createSlice({
  name: "getAllMarqueesSlice",
  initialState: {
    getAllMarquees: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetAllMarquees: (state) => {
      state.getAllMarquees.loading = false;
      state.getAllMarquees.error = false;
      state.getAllMarquees.data = [];
      state.getAllMarquees.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLMARQUEES.fulfilled, (state, action) => {
      state.getAllMarquees = {
        ...state.getAllMarquees,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLMARQUEES.pending, (state, action) => {
      state.getAllMarquees = {
        ...state.getAllMarquees,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLMARQUEES.rejected, (state, action) => {
      state.getAllMarquees = {
        ...state.getAllMarquees,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllMarqueesAction = {
  GETALLMARQUEES,
};

export { getAllMarqueesAction };
export default getAllMarqueesSlice.reducer;
export const { setInitialStateOfgetAllMarquees } = getAllMarqueesSlice.actions;
