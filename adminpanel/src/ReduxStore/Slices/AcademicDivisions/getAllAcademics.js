



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const GETALLACADEMICS= createAsyncThunk(
  "getAllAcademics/getAllAcademics",
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
const getAllAcademicsSlice = createSlice({
  name: "getAllAcademicsSlice",
  initialState: {
    getAllAcademics: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllAcademics: (state) => {
        state.getAllAcademics.loading = false
        state.getAllAcademics.error = false
        state.getAllAcademics.data = []
        state.getAllAcademics.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLACADEMICS.fulfilled, (state, action) => {
      state.getAllAcademics = {
        ...state.getAllAcademics,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLACADEMICS.pending, (state, action) => {
      state.getAllAcademics = {
        ...state.getAllAcademics,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLACADEMICS.rejected, (state, action) => {
      state.getAllAcademics = {
        ...state.getAllAcademics,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllAcademicsAction = {
    GETALLACADEMICS,
};

export { getAllAcademicsAction };
export default getAllAcademicsSlice.reducer;
export const {setInitialStateOfgetAllAcademics} = getAllAcademicsSlice.actions
