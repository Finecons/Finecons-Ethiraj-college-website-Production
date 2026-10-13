/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// ADDMARQUEE
const ADDMARQUEE = createAsyncThunk(
  "addMarquee/addMarquee",
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

const addMarqueeSlice = createSlice({
  name: "addMarqueeSlice",
  initialState: {
    addMarquee: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfaddMarquee: (state) => {
      state.addMarquee.loading = false;
      state.addMarquee.error = false;
      state.addMarquee.data = [];
      state.addMarquee.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ADDMARQUEE.fulfilled, (state, action) => {
      state.addMarquee = {
        ...state.addMarquee,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDMARQUEE.pending, (state, action) => {
      state.addMarquee = {
        ...state.addMarquee,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDMARQUEE.rejected, (state, action) => {
      state.addMarquee = {
        ...state.addMarquee,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addMarqueeAction = {
  ADDMARQUEE,
};

export { addMarqueeAction };
export default addMarqueeSlice.reducer;
export const { setInitialStateOfaddMarquee } = addMarqueeSlice.actions;
