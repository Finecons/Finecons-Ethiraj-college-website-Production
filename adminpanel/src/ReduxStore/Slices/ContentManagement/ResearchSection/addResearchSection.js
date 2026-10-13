/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// addResearchSection
// ADDRESEARCHSECTION


const ADDRESEARCHSECTION = createAsyncThunk(
  "addResearchSection/addResearchSection",
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

// addResearchSectionSlice
const addResearchSectionSlice = createSlice({
  name: "addResearchSectionSlice",
  initialState: {
    addResearchSection: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfaddResearchSection: (state) => {
      state.addResearchSection.loading = false;
      state.addResearchSection.error = false;
      state.addResearchSection.data = [];
      state.addResearchSection.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ADDRESEARCHSECTION.fulfilled, (state, action) => {
      state.addResearchSection = {
        ...state.addResearchSection,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDRESEARCHSECTION.pending, (state, action) => {
      state.addResearchSection = {
        ...state.addResearchSection,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDRESEARCHSECTION.rejected, (state, action) => {
      state.addResearchSection = {
        ...state.addResearchSection,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addResearchSectionAction = {
  ADDRESEARCHSECTION,
};

export { addResearchSectionAction };
export default addResearchSectionSlice.reducer;
export const { setInitialStateOfaddResearchSection } =
  addResearchSectionSlice.actions;
