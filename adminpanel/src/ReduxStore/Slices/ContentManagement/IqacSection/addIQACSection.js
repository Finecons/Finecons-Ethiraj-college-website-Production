
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// addIQACSection
// ADDIQACSECTION


const ADDIQACSECTION= createAsyncThunk(
  "addIQACSection/addIQACSection",
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
const addIQACSectionSlice = createSlice({
  name: "addIQACSectionSlice",
  initialState: {
    addIQACSection: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfaddIQACSection: (state) => {
        state.addIQACSection.loading = false
        state.addIQACSection.error = false
        state.addIQACSection.data = []
        state.addIQACSection.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(ADDIQACSECTION.fulfilled, (state, action) => {
      state.addIQACSection = {
        ...state.addIQACSection,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDIQACSECTION.pending, (state, action) => {
      state.addIQACSection = {
        ...state.addIQACSection,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDIQACSECTION.rejected, (state, action) => {
      state.addIQACSection = {
        ...state.addIQACSection,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addIQACSectionAction = {
    ADDIQACSECTION,
};

export { addIQACSectionAction };
export default addIQACSectionSlice.reducer;
export const {setInitialStateOfaddIQACSection} = addIQACSectionSlice.actions
