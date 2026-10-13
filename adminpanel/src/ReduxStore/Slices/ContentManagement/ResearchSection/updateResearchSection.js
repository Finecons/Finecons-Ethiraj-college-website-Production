/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// updateResearchSection
// UPDATERESEARCHSECTION


const UPDATERESEARCHSECTION = createAsyncThunk(
  "updateResearchSection/updateResearchSection",
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

// updateResearchSectionSlice
const updateResearchSectionSlice = createSlice({
  name: "updateResearchSectionSlice",
  initialState: {
    updateResearchSection: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfupdateResearchSection: (state) => {
      state.updateResearchSection.loading = false;
      state.updateResearchSection.error = false;
      state.updateResearchSection.data = [];
      state.updateResearchSection.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATERESEARCHSECTION.fulfilled, (state, action) => {
      state.updateResearchSection = {
        ...state.updateResearchSection,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATERESEARCHSECTION.pending, (state, action) => {
      state.updateResearchSection = {
        ...state.updateResearchSection,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATERESEARCHSECTION.rejected, (state, action) => {
      state.updateResearchSection = {
        ...state.updateResearchSection,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateResearchSectionAction = {
  UPDATERESEARCHSECTION,
};

export { updateResearchSectionAction };
export default updateResearchSectionSlice.reducer;
export const { setInitialStateOfupdateResearchSection } =
  updateResearchSectionSlice.actions;
