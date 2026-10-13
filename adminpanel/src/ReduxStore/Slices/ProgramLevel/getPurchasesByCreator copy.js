



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const GETPURCHASESBYCREATOR= createAsyncThunk(
  "getPurchasesByCreator/getPurchasesByCreator",
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
const getPurchasesByCreatorSlice = createSlice({
  name: "getPurchasesByCreatorSlice",
  initialState: {
    getPurchasesByCreator: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetPurchasesByCreator: (state) => {
        state.getPurchasesByCreator.loading = false
        state.getPurchasesByCreator.error = false
        state.getPurchasesByCreator.data = []
        state.getPurchasesByCreator.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETPURCHASESBYCREATOR.fulfilled, (state, action) => {
      state.getPurchasesByCreator = {
        ...state.getPurchasesByCreator,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETPURCHASESBYCREATOR.pending, (state, action) => {
      state.getPurchasesByCreator = {
        ...state.getPurchasesByCreator,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETPURCHASESBYCREATOR.rejected, (state, action) => {
      state.getPurchasesByCreator = {
        ...state.getPurchasesByCreator,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getPurchasesByCreatorAction = {
    GETPURCHASESBYCREATOR,
};

export { getPurchasesByCreatorAction };
export default getPurchasesByCreatorSlice.reducer;
export const {setInitialStateOfgetPurchasesByCreator} = getPurchasesByCreatorSlice.actions
