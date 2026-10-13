/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// addCampuslifeSection
// ADDCAMPUSLIFESECTION


const ADDCAMPUSLIFESECTION = createAsyncThunk(
  "addCampuslifeSection/addCampuslifeSection",
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

// addCampuslifeSectionSlice
const addCampuslifeSectionSlice = createSlice({
  name: "addCampuslifeSectionSlice",
  initialState: {
    addCampuslifeSection: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfaddCampuslifeSection: (state) => {
      state.addCampuslifeSection.loading = false;
      state.addCampuslifeSection.error = false;
      state.addCampuslifeSection.data = [];
      state.addCampuslifeSection.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ADDCAMPUSLIFESECTION.fulfilled, (state, action) => {
      state.addCampuslifeSection = {
        ...state.addCampuslifeSection,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDCAMPUSLIFESECTION.pending, (state, action) => {
      state.addCampuslifeSection = {
        ...state.addCampuslifeSection,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDCAMPUSLIFESECTION.rejected, (state, action) => {
      state.addCampuslifeSection = {
        ...state.addCampuslifeSection,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addCampuslifeSectionAction = {
  ADDCAMPUSLIFESECTION,
};

export { addCampuslifeSectionAction };
export default addCampuslifeSectionSlice.reducer;
export const { setInitialStateOfaddCampuslifeSection } =
  addCampuslifeSectionSlice.actions;
