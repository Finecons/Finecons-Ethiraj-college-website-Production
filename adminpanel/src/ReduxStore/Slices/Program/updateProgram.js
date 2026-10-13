



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const UPDATEPROGRAM= createAsyncThunk(
  "updateProgram/updateProgram",
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
const updateProgramSlice = createSlice({
  name: "updateProgramSlice",
  initialState: {
    updateProgram: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfupdateProgram: (state) => {
        state.updateProgram.loading = false
        state.updateProgram.error = false
        state.updateProgram.data = []
        state.updateProgram.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEPROGRAM.fulfilled, (state, action) => {
      state.updateProgram = {
        ...state.updateProgram,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEPROGRAM.pending, (state, action) => {
      state.updateProgram = {
        ...state.updateProgram,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEPROGRAM.rejected, (state, action) => {
      state.updateProgram = {
        ...state.updateProgram,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateProgramAction = {
    UPDATEPROGRAM,
};

export { updateProgramAction };
export default updateProgramSlice.reducer;
export const {setInitialStateOfupdateProgram} = updateProgramSlice.actions
