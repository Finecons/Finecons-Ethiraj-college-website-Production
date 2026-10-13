



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const ADDPROGRAM= createAsyncThunk(
  "addProgram/addProgram",
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
const addProgramSlice = createSlice({
  name: "addProgramSlice",
  initialState: {
    addProgram: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfaddProgram: (state) => {
        state.addProgram.loading = false
        state.addProgram.error = false
        state.addProgram.data = []
        state.addProgram.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(ADDPROGRAM.fulfilled, (state, action) => {
      state.addProgram = {
        ...state.addProgram,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDPROGRAM.pending, (state, action) => {
      state.addProgram = {
        ...state.addProgram,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDPROGRAM.rejected, (state, action) => {
      state.addProgram = {
        ...state.addProgram,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addProgramAction = {
    ADDPROGRAM,
};

export { addProgramAction };
export default addProgramSlice.reducer;
export const {setInitialStateOfaddProgram} = addProgramSlice.actions
