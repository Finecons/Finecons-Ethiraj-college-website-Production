



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const GETACADEMICBYID= createAsyncThunk(
  "getAcademicById/getAcademicById",
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
const getAcademicByIdSlice = createSlice({
  name: "getAcademicByIdSlice",
  initialState: {
    getAcademicById: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAcademicById: (state) => {
        state.getAcademicById.loading = false
        state.getAcademicById.error = false
        state.getAcademicById.data = []
        state.getAcademicById.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETACADEMICBYID.fulfilled, (state, action) => {
      state.getAcademicById = {
        ...state.getAcademicById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETACADEMICBYID.pending, (state, action) => {
      state.getAcademicById = {
        ...state.getAcademicById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETACADEMICBYID.rejected, (state, action) => {
      state.getAcademicById = {
        ...state.getAcademicById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAcademicByIdAction = {
    GETACADEMICBYID,
};

export { getAcademicByIdAction };
export default getAcademicByIdSlice.reducer;
export const {setInitialStateOfgetAcademicById} = getAcademicByIdSlice.actions
