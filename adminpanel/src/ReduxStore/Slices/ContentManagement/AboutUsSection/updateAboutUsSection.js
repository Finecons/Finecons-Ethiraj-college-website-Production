





/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// UPDATEABOUTUSSECTION
// UPDATEABOUTUSSECTION


const UPDATEABOUTUSSECTION= createAsyncThunk(
  "updateAboutUsSection/updateAboutUsSection",
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
const updateAboutUsSectionSlice = createSlice({
  name: "updateAboutUsSectionSlice",
  initialState: {
    updateAboutUsSection: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfupdateAboutUsSection: (state) => {
        state.updateAboutUsSection.loading = false
        state.updateAboutUsSection.error = false
        state.updateAboutUsSection.data = []
        state.updateAboutUsSection.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEABOUTUSSECTION.fulfilled, (state, action) => {
      state.updateAboutUsSection = {
        ...state.updateAboutUsSection,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEABOUTUSSECTION.pending, (state, action) => {
      state.updateAboutUsSection = {
        ...state.updateAboutUsSection,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEABOUTUSSECTION.rejected, (state, action) => {
      state.updateAboutUsSection = {
        ...state.updateAboutUsSection,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateAboutUsSectionAction = {
    UPDATEABOUTUSSECTION,
};

export { updateAboutUsSectionAction };
export default updateAboutUsSectionSlice.reducer;
export const {setInitialStateOfupdateAboutUsSection} = updateAboutUsSectionSlice.actions
