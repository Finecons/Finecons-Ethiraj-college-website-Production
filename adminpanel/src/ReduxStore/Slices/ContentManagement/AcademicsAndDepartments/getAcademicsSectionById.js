



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// GETACADEMICSSECTIONBYID
// GETACADEMICSSECTIONBYID


const GETACADEMICSSECTIONBYID= createAsyncThunk(
  "getAcademicsSectionById/getAcademicsSectionById",
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
const getAcademicsSectionByIdSlice = createSlice({
  name: "getAcademicsSectionByIdSlice",
  initialState: {
    getAcademicsSectionById: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAcademicsSectionById: (state) => {
        state.getAcademicsSectionById.loading = false
        state.getAcademicsSectionById.error = false
        state.getAcademicsSectionById.data = []
        state.getAcademicsSectionById.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETACADEMICSSECTIONBYID.fulfilled, (state, action) => {
      state.getAcademicsSectionById = {
        ...state.getAcademicsSectionById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETACADEMICSSECTIONBYID.pending, (state, action) => {
      state.getAcademicsSectionById = {
        ...state.getAcademicsSectionById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETACADEMICSSECTIONBYID.rejected, (state, action) => {
      state.getAcademicsSectionById = {
        ...state.getAcademicsSectionById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAcademicsSectionByIdAction = {
    GETACADEMICSSECTIONBYID,
};

export { getAcademicsSectionByIdAction };
export default getAcademicsSectionByIdSlice.reducer;
export const {setInitialStateOfgetAcademicsSectionById} = getAcademicsSectionByIdSlice.actions
