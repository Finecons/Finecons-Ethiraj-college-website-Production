



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const GETALLFUNDINGTYPES= createAsyncThunk(
  "getAllFundingTypes/getAllFundingTypes",
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
const getAllFundingTypesSlice = createSlice({
  name: "getAllFundingTypesSlice",
  initialState: {
    getAllFundingTypes: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllFundingTypes: (state) => {
        state.getAllFundingTypes.loading = false
        state.getAllFundingTypes.error = false
        state.getAllFundingTypes.data = []
        state.getAllFundingTypes.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLFUNDINGTYPES.fulfilled, (state, action) => {
      state.getAllFundingTypes = {
        ...state.getAllFundingTypes,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLFUNDINGTYPES.pending, (state, action) => {
      state.getAllFundingTypes = {
        ...state.getAllFundingTypes,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLFUNDINGTYPES.rejected, (state, action) => {
      state.getAllFundingTypes = {
        ...state.getAllFundingTypes,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllFundingTypesAction = {
    GETALLFUNDINGTYPES,
};

export { getAllFundingTypesAction };
export default getAllFundingTypesSlice.reducer;
export const {setInitialStateOfgetAllFundingTypes} = getAllFundingTypesSlice.actions
