



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const GETALLFACULTY= createAsyncThunk(
  "getAllFaculty/getAllFaculty",
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
const getAllFacultySlice = createSlice({
  name: "getAllFacultySlice",
  initialState: {
    getAllFaculty: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllFaculty: (state) => {
        state.getAllFaculty.loading = false
        state.getAllFaculty.error = false
        state.getAllFaculty.data = []
        state.getAllFaculty.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLFACULTY.fulfilled, (state, action) => {
      state.getAllFaculty = {
        ...state.getAllFaculty,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLFACULTY.pending, (state, action) => {
      state.getAllFaculty = {
        ...state.getAllFaculty,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLFACULTY.rejected, (state, action) => {
      state.getAllFaculty = {
        ...state.getAllFaculty,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllFacultyAction = {
    GETALLFACULTY,
};

export { getAllFacultyAction };
export default getAllFacultySlice.reducer;
export const {setInitialStateOfgetAllFaculty} = getAllFacultySlice.actions
