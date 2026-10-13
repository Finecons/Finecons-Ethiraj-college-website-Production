
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getProgramById
// getProgramById


const GETPROGRAMBYID= createAsyncThunk(
  "getProgramById/getProgramById",
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
const getProgramByIdSlice = createSlice({
  name: "getProgramByIdSlice",
  initialState: {
    getProgramById: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetProgramById: (state) => {
        state.getProgramById.loading = false
        state.getProgramById.error = false
        state.getProgramById.data = []
        state.getProgramById.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETPROGRAMBYID.fulfilled, (state, action) => {
      state.getProgramById = {
        ...state.getProgramById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETPROGRAMBYID.pending, (state, action) => {
      state.getProgramById = {
        ...state.getProgramById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETPROGRAMBYID.rejected, (state, action) => {
      state.getProgramById = {
        ...state.getProgramById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getProgramByIdAction = {
    GETPROGRAMBYID,
};

export { getProgramByIdAction };
export default getProgramByIdSlice.reducer;
export const {setInitialStateOfgetProgramById} = getProgramByIdSlice.actions
