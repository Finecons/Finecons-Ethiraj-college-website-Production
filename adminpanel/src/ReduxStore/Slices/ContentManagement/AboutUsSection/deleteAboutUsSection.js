





/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// DELETEABOUTUSSECTION
// DELETEABOUTUSSECTION


const DELETEABOUTUSSECTION= createAsyncThunk(
  "deleteAboutUsSection/deleteAboutUsSection",
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
const deleteAboutUsSectionSlice = createSlice({
  name: "deleteAboutUsSectionSlice",
  initialState: {
    deleteAboutUsSection: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfdeleteAboutUsSection: (state) => {
        state.deleteAboutUsSection.loading = false
        state.deleteAboutUsSection.error = false
        state.deleteAboutUsSection.data = []
        state.deleteAboutUsSection.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(DELETEABOUTUSSECTION.fulfilled, (state, action) => {
      state.deleteAboutUsSection = {
        ...state.deleteAboutUsSection,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(DELETEABOUTUSSECTION.pending, (state, action) => {
      state.deleteAboutUsSection = {
        ...state.deleteAboutUsSection,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(DELETEABOUTUSSECTION.rejected, (state, action) => {
      state.deleteAboutUsSection = {
        ...state.deleteAboutUsSection,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const deleteAboutUsSectionAction = {
    DELETEABOUTUSSECTION,
};

export { deleteAboutUsSectionAction };
export default deleteAboutUsSectionSlice.reducer;
export const {setInitialStateOfdeleteAboutUsSection} = deleteAboutUsSectionSlice.actions
