



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// ADDACADEMICSSECTION
// ADDACADEMICSSECTION


const ADDACADEMICSSECTION= createAsyncThunk(
  "addAcademicsSection/addAcademicsSection",
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
const addAcademicsSectionSlice = createSlice({
  name: "addAcademicsSectionSlice",
  initialState: {
    addAcademicsSection: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfaddAcademicsSection: (state) => {
        state.addAcademicsSection.loading = false
        state.addAcademicsSection.error = false
        state.addAcademicsSection.data = []
        state.addAcademicsSection.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(ADDACADEMICSSECTION.fulfilled, (state, action) => {
      state.addAcademicsSection = {
        ...state.addAcademicsSection,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDACADEMICSSECTION.pending, (state, action) => {
      state.addAcademicsSection = {
        ...state.addAcademicsSection,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDACADEMICSSECTION.rejected, (state, action) => {
      state.addAcademicsSection = {
        ...state.addAcademicsSection,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addAcademicsSectionAction = {
    ADDACADEMICSSECTION,
};

export { addAcademicsSectionAction };
export default addAcademicsSectionSlice.reducer;
export const {setInitialStateOfaddAcademicsSection} = addAcademicsSectionSlice.actions
