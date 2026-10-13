



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// DELETEHOMESECTION
// DELETEHOMESECTION


const DELETEHOMESECTION= createAsyncThunk(
  "deleteHomeSection/deleteHomeSection",
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
const deleteHomeSectionSlice = createSlice({
  name: "deleteHomeSectionSlice",
  initialState: {
    deleteHomeSection: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfdeleteHomeSection: (state) => {
        state.deleteHomeSection.loading = false
        state.deleteHomeSection.error = false
        state.deleteHomeSection.data = []
        state.deleteHomeSection.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(DELETEHOMESECTION.fulfilled, (state, action) => {
      state.deleteHomeSection = {
        ...state.deleteHomeSection,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(DELETEHOMESECTION.pending, (state, action) => {
      state.deleteHomeSection = {
        ...state.deleteHomeSection,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(DELETEHOMESECTION.rejected, (state, action) => {
      state.deleteHomeSection = {
        ...state.deleteHomeSection,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const deleteHomeSectionAction = {
    DELETEHOMESECTION,
};

export { deleteHomeSectionAction };
export default deleteHomeSectionSlice.reducer;
export const {setInitialStateOfdeleteHomeSection} = deleteHomeSectionSlice.actions
