
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// updateIQACSection
// UPDATEIQACSECTION


const UPDATEIQACSECTION= createAsyncThunk(
  "updateIQACSection/updateIQACSection",
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
const updateIQACSectionSlice = createSlice({
  name: "updateIQACSectionSlice",
  initialState: {
    updateIQACSection: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfupdateIQACSection: (state) => {
        state.updateIQACSection.loading = false
        state.updateIQACSection.error = false
        state.updateIQACSection.data = []
        state.updateIQACSection.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEIQACSECTION.fulfilled, (state, action) => {
      state.updateIQACSection = {
        ...state.updateIQACSection,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEIQACSECTION.pending, (state, action) => {
      state.updateIQACSection = {
        ...state.updateIQACSection,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEIQACSECTION.rejected, (state, action) => {
      state.updateIQACSection = {
        ...state.updateIQACSection,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateIQACSectionAction = {
    UPDATEIQACSECTION,
};

export { updateIQACSectionAction };
export default updateIQACSectionSlice.reducer;
export const {setInitialStateOfupdateIQACSection} = updateIQACSectionSlice.actions
