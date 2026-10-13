/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// RESTOREMARQUEE
const RESTOREMARQUEE = createAsyncThunk(
  "restoreMarquee/restoreMarquee",
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

const restoreMarqueeSlice = createSlice({
  name: "restoreMarqueeSlice",
  initialState: {
    restoreMarquee: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfrestoreMarquee: (state) => {
      state.restoreMarquee.loading = false;
      state.restoreMarquee.error = false;
      state.restoreMarquee.data = [];
      state.restoreMarquee.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(RESTOREMARQUEE.fulfilled, (state, action) => {
      state.restoreMarquee = {
        ...state.restoreMarquee,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(RESTOREMARQUEE.pending, (state, action) => {
      state.restoreMarquee = {
        ...state.restoreMarquee,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(RESTOREMARQUEE.rejected, (state, action) => {
      state.restoreMarquee = {
        ...state.restoreMarquee,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const restoreMarqueeAction = {
  RESTOREMARQUEE,
};

export { restoreMarqueeAction };
export default restoreMarqueeSlice.reducer;
export const { setInitialStateOfrestoreMarquee } = restoreMarqueeSlice.actions;
