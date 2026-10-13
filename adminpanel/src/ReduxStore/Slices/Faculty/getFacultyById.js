



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const GETFACULTYBYID= createAsyncThunk(
  "getFacultyById/getFacultyById",
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
const getFacultyByIdSlice = createSlice({
  name: "getFacultyByIdSlice",
  initialState: {
    getFacultyById: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetFacultyById: (state) => {
        state.getFacultyById.loading = false
        state.getFacultyById.error = false
        state.getFacultyById.data = []
        state.getFacultyById.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETFACULTYBYID.fulfilled, (state, action) => {
      state.getFacultyById = {
        ...state.getFacultyById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETFACULTYBYID.pending, (state, action) => {
      state.getFacultyById = {
        ...state.getFacultyById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETFACULTYBYID.rejected, (state, action) => {
      state.getFacultyById = {
        ...state.getFacultyById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getFacultyByIdAction = {
    GETFACULTYBYID,
};

export { getFacultyByIdAction };
export default getFacultyByIdSlice.reducer;
export const {setInitialStateOfgetFacultyById} = getFacultyByIdSlice.actions
