



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const GETSPOGRAMMELEVELBYID= createAsyncThunk(
  "getProgrammeLevelById/",
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
const getProgrammeLevelByIdSlice = createSlice({
  name: "getProgrammeLevelByIdSlice",
  initialState: {
    getProgrammeLevelById: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetProgrammeLevelById: (state) => {
        state.getProgrammeLevelById.loading = false
        state.getProgrammeLevelById.error = false
        state.getProgrammeLevelById.data = []
        state.getProgrammeLevelById.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETSPOGRAMMELEVELBYID.fulfilled, (state, action) => {
      state.getProgrammeLevelById = {
        ...state.getProgrammeLevelById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETSPOGRAMMELEVELBYID.pending, (state, action) => {
      state.getProgrammeLevelById = {
        ...state.getProgrammeLevelById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETSPOGRAMMELEVELBYID.rejected, (state, action) => {
      state.getProgrammeLevelById = {
        ...state.getProgrammeLevelById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getProgrammeLevelByIdAction = {
    GETSPOGRAMMELEVELBYID,
};

export { getProgrammeLevelByIdAction };
export default getProgrammeLevelByIdSlice.reducer;
export const {setInitialStateOfgetProgrammeLevelById} = getProgrammeLevelByIdSlice.actions
