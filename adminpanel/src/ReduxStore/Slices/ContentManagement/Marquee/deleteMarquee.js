/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// DELETEMARQUEE
const DELETEMARQUEE = createAsyncThunk(
  "deleteMarquee/deleteMarquee",
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

const deleteMarqueeSlice = createSlice({
  name: "deleteMarqueeSlice",
  initialState: {
    deleteMarquee: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfdeleteMarquee: (state) => {
      state.deleteMarquee.loading = false;
      state.deleteMarquee.error = false;
      state.deleteMarquee.data = [];
      state.deleteMarquee.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(DELETEMARQUEE.fulfilled, (state, action) => {
      state.deleteMarquee = {
        ...state.deleteMarquee,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(DELETEMARQUEE.pending, (state, action) => {
      state.deleteMarquee = {
        ...state.deleteMarquee,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(DELETEMARQUEE.rejected, (state, action) => {
      state.deleteMarquee = {
        ...state.deleteMarquee,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const deleteMarqueeAction = {
  DELETEMARQUEE,
};

export { deleteMarqueeAction };
export default deleteMarqueeSlice.reducer;
export const { setInitialStateOfdeleteMarquee } = deleteMarqueeSlice.actions;
