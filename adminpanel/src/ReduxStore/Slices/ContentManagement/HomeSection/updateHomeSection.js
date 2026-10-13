



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// UPDATEHOMESECTION
// UPDATEHOMESECTION


const UPDATEHOMESECTION= createAsyncThunk(
  "updateHomeSection/updateHomeSection",
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
const updateHomeSectionSlice = createSlice({
  name: "updateHomeSectionSlice",
  initialState: {
    updateHomeSection: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfupdateHomeSection: (state) => {
        state.updateHomeSection.loading = false
        state.updateHomeSection.error = false
        state.updateHomeSection.data = []
        state.updateHomeSection.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEHOMESECTION.fulfilled, (state, action) => {
      state.updateHomeSection = {
        ...state.updateHomeSection,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEHOMESECTION.pending, (state, action) => {
      state.updateHomeSection = {
        ...state.updateHomeSection,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEHOMESECTION.rejected, (state, action) => {
      state.updateHomeSection = {
        ...state.updateHomeSection,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateHomeSectionAction = {
    UPDATEHOMESECTION,
};

export { updateHomeSectionAction };
export default updateHomeSectionSlice.reducer;
export const {setInitialStateOfupdateHomeSection} = updateHomeSectionSlice.actions
