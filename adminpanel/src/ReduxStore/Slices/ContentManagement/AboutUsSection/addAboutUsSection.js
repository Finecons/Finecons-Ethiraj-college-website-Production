



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// ADDABOUTUSSECTION
// ADDABOUTUSSECTION


const ADDABOUTUSSECTION= createAsyncThunk(
  "addAboutUsSection/addAboutUsSection",
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
const addAboutUsSectionSlice = createSlice({
  name: "addAboutUsSectionSlice",
  initialState: {
    addAboutUsSection: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfaddAboutUsSection: (state) => {
        state.addAboutUsSection.loading = false
        state.addAboutUsSection.error = false
        state.addAboutUsSection.data = []
        state.addAboutUsSection.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(ADDABOUTUSSECTION.fulfilled, (state, action) => {
      state.addAboutUsSection = {
        ...state.addAboutUsSection,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDABOUTUSSECTION.pending, (state, action) => {
      state.addAboutUsSection = {
        ...state.addAboutUsSection,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDABOUTUSSECTION.rejected, (state, action) => {
      state.addAboutUsSection = {
        ...state.addAboutUsSection,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addAboutUsSectionAction = {
    ADDABOUTUSSECTION,
};

export { addAboutUsSectionAction };
export default addAboutUsSectionSlice.reducer;
export const {setInitialStateOfaddAboutUsSection} = addAboutUsSectionSlice.actions
