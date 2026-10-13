



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const GETALLPROGRAMS= createAsyncThunk(
  "getAllPrograms/getAllPrograms",
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
const getAllProgramsSlice = createSlice({
  name: "getAllProgramsSlice",
  initialState: {
    getAllPrograms: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllPrograms: (state) => {
        state.getAllPrograms.loading = false
        state.getAllPrograms.error = false
        state.getAllPrograms.data = []
        state.getAllPrograms.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLPROGRAMS.fulfilled, (state, action) => {
      state.getAllPrograms = {
        ...state.getAllPrograms,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLPROGRAMS.pending, (state, action) => {
      state.getAllPrograms = {
        ...state.getAllPrograms,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLPROGRAMS.rejected, (state, action) => {
      state.getAllPrograms = {
        ...state.getAllPrograms,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllProgramsAction = {
    GETALLPROGRAMS,
};

export { getAllProgramsAction };
export default getAllProgramsSlice.reducer;
export const {setInitialStateOfgetAllPrograms} = getAllProgramsSlice.actions
