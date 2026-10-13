





/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// UPDATEACADEMICSSECTION
// UPDATEACADEMICSSECTION


const UPDATEACADEMICSSECTION= createAsyncThunk(
  "updateAcademicsSection/updateAcademicsSection",
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
const updateAcademicsSectionSlice = createSlice({
  name: "updateAcademicsSectionSlice",
  initialState: {
    updateAcademicsSection: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfupdateAcademicsSection: (state) => {
        state.updateAcademicsSection.loading = false
        state.updateAcademicsSection.error = false
        state.updateAcademicsSection.data = []
        state.updateAcademicsSection.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEACADEMICSSECTION.fulfilled, (state, action) => {
      state.updateAcademicsSection = {
        ...state.updateAcademicsSection,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEACADEMICSSECTION.pending, (state, action) => {
      state.updateAcademicsSection = {
        ...state.updateAcademicsSection,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEACADEMICSSECTION.rejected, (state, action) => {
      state.updateAcademicsSection = {
        ...state.updateAcademicsSection,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateAcademicsSectionAction = {
    UPDATEACADEMICSSECTION,
};

export { updateAcademicsSectionAction };
export default updateAcademicsSectionSlice.reducer;
export const {setInitialStateOfupdateAcademicsSection} = updateAcademicsSectionSlice.actions
