/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// GETMARQUEEBYID
const GETMARQUEEBYID = createAsyncThunk(
  "getMarqueeById/getMarqueeById",
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

const getMarqueeByIdSlice = createSlice({
  name: "getMarqueeByIdSlice",
  initialState: {
    getMarqueeById: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetMarqueeById: (state) => {
      state.getMarqueeById.loading = false;
      state.getMarqueeById.error = false;
      state.getMarqueeById.data = [];
      state.getMarqueeById.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETMARQUEEBYID.fulfilled, (state, action) => {
      state.getMarqueeById = {
        ...state.getMarqueeById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETMARQUEEBYID.pending, (state, action) => {
      state.getMarqueeById = {
        ...state.getMarqueeById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETMARQUEEBYID.rejected, (state, action) => {
      state.getMarqueeById = {
        ...state.getMarqueeById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getMarqueeByIdAction = {
  GETMARQUEEBYID,
};

export { getMarqueeByIdAction };
export default getMarqueeByIdSlice.reducer;
export const { setInitialStateOfgetMarqueeById } = getMarqueeByIdSlice.actions;
