/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getAllAcademicsWithAllDetails
// getAllAcademicsWithAllDetails

const GETALLACADEMICSWITALLDETAILS = createAsyncThunk(
  "getAllAcademicsWithAllDetails/getAllAcademicsWithAllDetails",
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

// getAllAcademicsWithAllDetailsSlice
const getAllAcademicsWithAllDetailsSlice = createSlice({
  name: "getAllAcademicsWithAllDetailsSlice",
  initialState: {
    getAllAcademicsWithAllDetails: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetAllAcademicsWithAllDetails: (state) => {
      state.getAllAcademicsWithAllDetails.loading = false;
      state.getAllAcademicsWithAllDetails.error = false;
      state.getAllAcademicsWithAllDetails.data = [];
      state.getAllAcademicsWithAllDetails.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLACADEMICSWITALLDETAILS.fulfilled, (state, action) => {
      state.getAllAcademicsWithAllDetails = {
        ...state.getAllAcademicsWithAllDetails,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLACADEMICSWITALLDETAILS.pending, (state, action) => {
      state.getAllAcademicsWithAllDetails = {
        ...state.getAllAcademicsWithAllDetails,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLACADEMICSWITALLDETAILS.rejected, (state, action) => {
      state.getAllAcademicsWithAllDetails = {
        ...state.getAllAcademicsWithAllDetails,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllAcademicsWithAllDetailsAction = {
  GETALLACADEMICSWITALLDETAILS,
};

export { getAllAcademicsWithAllDetailsAction };
export default getAllAcademicsWithAllDetailsSlice.reducer;
export const { setInitialStateOfgetAllAcademicsWithAllDetails } =
  getAllAcademicsWithAllDetailsSlice.actions;
