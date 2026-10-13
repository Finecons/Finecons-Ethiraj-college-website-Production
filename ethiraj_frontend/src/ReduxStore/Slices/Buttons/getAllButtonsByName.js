
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getAllButtonsByName
// getAllButtonsByName


const GETALLBUTTONSBYNAME= createAsyncThunk(
  "getAllButtonsByName/getAllButtonsByName",
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
const getAllButtonsByNameSlice = createSlice({
  name: "getAllButtonsByNameSlice",
  initialState: {
    getAllButtonsByName: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllButtonsByName: (state) => {
        state.getAllButtonsByName.loading = false
        state.getAllButtonsByName.error = false
        state.getAllButtonsByName.data = []
        state.getAllButtonsByName.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLBUTTONSBYNAME.fulfilled, (state, action) => {
      state.getAllButtonsByName = {
        ...state.getAllButtonsByName,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLBUTTONSBYNAME.pending, (state, action) => {
      state.getAllButtonsByName = {
        ...state.getAllButtonsByName,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLBUTTONSBYNAME.rejected, (state, action) => {
      state.getAllButtonsByName = {
        ...state.getAllButtonsByName,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllButtonsByNameAction = {
    GETALLBUTTONSBYNAME,
};

export { getAllButtonsByNameAction };
export default getAllButtonsByNameSlice.reducer;
export const {setInitialStateOfgetAllButtonsByName} = getAllButtonsByNameSlice.actions
