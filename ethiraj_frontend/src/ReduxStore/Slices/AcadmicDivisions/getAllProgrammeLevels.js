
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getAllProgrammeLevels
// getAllProgrammeLevels


const GETALLPROGRAMMELEVELS= createAsyncThunk(
  "getAllProgrammeLevels/getAllProgrammeLevels",
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
const getAllProgrammeLevelsSlice = createSlice({
  name: "getAllProgrammeLevelsSlice",
  initialState: {
    getAllProgrammeLevels: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllProgrammeLevels: (state) => {
        state.getAllProgrammeLevels.loading = false
        state.getAllProgrammeLevels.error = false
        state.getAllProgrammeLevels.data = []
        state.getAllProgrammeLevels.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLPROGRAMMELEVELS.fulfilled, (state, action) => {
      state.getAllProgrammeLevels = {
        ...state.getAllProgrammeLevels,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLPROGRAMMELEVELS.pending, (state, action) => {
      state.getAllProgrammeLevels = {
        ...state.getAllProgrammeLevels,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLPROGRAMMELEVELS.rejected, (state, action) => {
      state.getAllProgrammeLevels = {
        ...state.getAllProgrammeLevels,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllProgrammeLevelsAction = {
    GETALLPROGRAMMELEVELS,
};

export { getAllProgrammeLevelsAction };
export default getAllProgrammeLevelsSlice.reducer;
export const {setInitialStateOfgetAllProgrammeLevels} = getAllProgrammeLevelsSlice.actions
