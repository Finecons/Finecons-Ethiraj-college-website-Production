/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// GETALLMARQUEESBYPAGE
const GETALLMARQUEESBYPAGE = createAsyncThunk(
  "getAllMarqueesByPageName/getAllMarqueesByPageName",
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

const getAllMarqueesByPageSlice = createSlice({
  name: "getAllMarqueesByPageSlice",
  initialState: {
    getAllMarqueesByPageName: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetAllMarqueesByPageName: (state) => {
      state.getAllMarqueesByPageName.loading = false;
      state.getAllMarqueesByPageName.error = false;
      state.getAllMarqueesByPageName.data = [];
      state.getAllMarqueesByPageName.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLMARQUEESBYPAGE.fulfilled, (state, action) => {
      state.getAllMarqueesByPageName = {
        ...state.getAllMarqueesByPageName,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLMARQUEESBYPAGE.pending, (state, action) => {
      state.getAllMarqueesByPageName = {
        ...state.getAllMarqueesByPageName,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLMARQUEESBYPAGE.rejected, (state, action) => {
      state.getAllMarqueesByPageName = {
        ...state.getAllMarqueesByPageName,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllMarqueesByPageAction = {
  GETALLMARQUEESBYPAGE,
};

export { getAllMarqueesByPageAction };
export default getAllMarqueesByPageSlice.reducer;
export const { setInitialStateOfgetAllMarqueesByPageName } = getAllMarqueesByPageSlice.actions;
