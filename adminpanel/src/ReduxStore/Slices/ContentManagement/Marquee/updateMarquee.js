/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// UPDATEMARQUEE
const UPDATEMARQUEE = createAsyncThunk(
  "updateMarquee/updateMarquee",
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

const updateMarqueeSlice = createSlice({
  name: "updateMarqueeSlice",
  initialState: {
    updateMarquee: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfupdateMarquee: (state) => {
      state.updateMarquee.loading = false;
      state.updateMarquee.error = false;
      state.updateMarquee.data = [];
      state.updateMarquee.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEMARQUEE.fulfilled, (state, action) => {
      state.updateMarquee = {
        ...state.updateMarquee,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEMARQUEE.pending, (state, action) => {
      state.updateMarquee = {
        ...state.updateMarquee,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEMARQUEE.rejected, (state, action) => {
      state.updateMarquee = {
        ...state.updateMarquee,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateMarqueeAction = {
  UPDATEMARQUEE,
};

export { updateMarqueeAction };
export default updateMarqueeSlice.reducer;
export const { setInitialStateOfupdateMarquee } = updateMarqueeSlice.actions;
