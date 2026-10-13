
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// GETACADEMICSSECTIONSBYNAME
// GETACADEMICSSECTIONSBYNAME


const GETACADEMICSSECTIONSBYNAME= createAsyncThunk(
  "getAcademicsSectionsByName/getAcademicsSectionsByName",
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
const getAcademicsSectionsByNameSlice = createSlice({
  name: "getAcademicsSectionsByNameSlice",
  initialState: {
    getAcademicsSectionsByName: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAcademicsSectionsByName: (state) => {
        state.getAcademicsSectionsByName.loading = false
        state.getAcademicsSectionsByName.error = false
        state.getAcademicsSectionsByName.data = []
        state.getAcademicsSectionsByName.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETACADEMICSSECTIONSBYNAME.fulfilled, (state, action) => {
      state.getAcademicsSectionsByName = {
        ...state.getAcademicsSectionsByName,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETACADEMICSSECTIONSBYNAME.pending, (state, action) => {
      state.getAcademicsSectionsByName = {
        ...state.getAcademicsSectionsByName,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETACADEMICSSECTIONSBYNAME.rejected, (state, action) => {
      state.getAcademicsSectionsByName = {
        ...state.getAcademicsSectionsByName,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAcademicsSectionsByNameAction = {
    GETACADEMICSSECTIONSBYNAME,
};

export { getAcademicsSectionsByNameAction };
export default getAcademicsSectionsByNameSlice.reducer;
export const {setInitialStateOfgetAcademicsSectionsByName} = getAcademicsSectionsByNameSlice.actions
