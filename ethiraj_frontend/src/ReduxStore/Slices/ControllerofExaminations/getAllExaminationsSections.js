/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getAllExaminationsSections
const GETALLEXAMINATIONSSECTIONS = createAsyncThunk(
  "getAllExaminationsSections/getAllExaminationsSections",
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

// getAllExaminationsSectionsSlice
const getAllExaminationsSectionsSlice = createSlice({
  name: "getAllExaminationsSectionsSlice",
  initialState: {
    getAllExaminationsSections: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetAllExaminationsSections: (state) => {
      state.getAllExaminationsSections.loading = false;
      state.getAllExaminationsSections.error = false;
      state.getAllExaminationsSections.data = [];
      state.getAllExaminationsSections.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLEXAMINATIONSSECTIONS.fulfilled, (state, action) => {
      state.getAllExaminationsSections = {
        ...state.getAllExaminationsSections,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLEXAMINATIONSSECTIONS.pending, (state, action) => {
      state.getAllExaminationsSections = {
        ...state.getAllExaminationsSections,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLEXAMINATIONSSECTIONS.rejected, (state, action) => {
      state.getAllExaminationsSections = {
        ...state.getAllExaminationsSections,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllExaminationsSectionsAction = {
  GETALLEXAMINATIONSSECTIONS,
};

export { getAllExaminationsSectionsAction };
export default getAllExaminationsSectionsSlice.reducer;
export const { setInitialStateOfgetAllExaminationsSections } =
  getAllExaminationsSectionsSlice.actions;
