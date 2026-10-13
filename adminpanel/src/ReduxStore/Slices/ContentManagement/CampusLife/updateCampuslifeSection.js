/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// updateCampuslifeSection
// UPDATECAMPUSLIFESECTION


const UPDATECAMPUSLIFESECTION = createAsyncThunk(
  "updateCampuslifeSection/updateCampuslifeSection",
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

// updateCampuslifeSectionSlice
const updateCampuslifeSectionSlice = createSlice({
  name: "updateCampuslifeSectionSlice",
  initialState: {
    updateCampuslifeSection: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfupdateCampuslifeSection: (state) => {
      state.updateCampuslifeSection.loading = false;
      state.updateCampuslifeSection.error = false;
      state.updateCampuslifeSection.data = [];
      state.updateCampuslifeSection.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATECAMPUSLIFESECTION.fulfilled, (state, action) => {
      state.updateCampuslifeSection = {
        ...state.updateCampuslifeSection,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATECAMPUSLIFESECTION.pending, (state, action) => {
      state.updateCampuslifeSection = {
        ...state.updateCampuslifeSection,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATECAMPUSLIFESECTION.rejected, (state, action) => {
      state.updateCampuslifeSection = {
        ...state.updateCampuslifeSection,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateCampuslifeSectionAction = {
  UPDATECAMPUSLIFESECTION,
};

export { updateCampuslifeSectionAction };
export default updateCampuslifeSectionSlice.reducer;
export const { setInitialStateOfupdateCampuslifeSection } =
  updateCampuslifeSectionSlice.actions;
