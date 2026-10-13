/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// getResearchSectionById
// GETRESEARCHSECTIONBYID


const GETRESEARCHSECTIONBYID = createAsyncThunk(
  "getResearchSectionById/getResearchSectionById",
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

// getResearchSectionByIdSlice
const getResearchSectionByIdSlice = createSlice({
  name: "getResearchSectionByIdSlice",
  initialState: {
    getResearchSectionById: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetResearchSectionById: (state) => {
      state.getResearchSectionById.loading = false;
      state.getResearchSectionById.error = false;
      state.getResearchSectionById.data = [];
      state.getResearchSectionById.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETRESEARCHSECTIONBYID.fulfilled, (state, action) => {
      state.getResearchSectionById = {
        ...state.getResearchSectionById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETRESEARCHSECTIONBYID.pending, (state, action) => {
      state.getResearchSectionById = {
        ...state.getResearchSectionById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETRESEARCHSECTIONBYID.rejected, (state, action) => {
      state.getResearchSectionById = {
        ...state.getResearchSectionById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getResearchSectionByIdAction = {
  GETRESEARCHSECTIONBYID,
};

export { getResearchSectionByIdAction };
export default getResearchSectionByIdSlice.reducer;
export const { setInitialStateOfgetResearchSectionById } =
  getResearchSectionByIdSlice.actions;
