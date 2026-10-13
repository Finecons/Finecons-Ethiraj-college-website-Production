/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getImportantResearchHighlights
// GETIMPORTANTRESEARCHHIGHLIGHTS


const GETIMPORTANTRESEARCHHIGHLIGHTS= createAsyncThunk(
  "getImportantResearchHighlights/getImportantResearchHighlights",
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

// getImportantResearchHighlightsSlice
const getImportantResearchHighlightsSlice = createSlice({
  name: "getImportantResearchHighlightsSlice",
  initialState: {
    getImportantResearchHighlights: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetImportantResearchHighlights: (state) => {
        state.getImportantResearchHighlights.loading = false
        state.getImportantResearchHighlights.error = false
        state.getImportantResearchHighlights.data = []
        state.getImportantResearchHighlights.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETIMPORTANTRESEARCHHIGHLIGHTS.fulfilled, (state, action) => {
      state.getImportantResearchHighlights = {
        ...state.getImportantResearchHighlights,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETIMPORTANTRESEARCHHIGHLIGHTS.pending, (state, action) => {
      state.getImportantResearchHighlights = {
        ...state.getImportantResearchHighlights,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETIMPORTANTRESEARCHHIGHLIGHTS.rejected, (state, action) => {
      state.getImportantResearchHighlights = {
        ...state.getImportantResearchHighlights,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getImportantResearchHighlightsAction = {
    GETIMPORTANTRESEARCHHIGHLIGHTS,
};

export { getImportantResearchHighlightsAction };
export default getImportantResearchHighlightsSlice.reducer;
export const {setInitialStateOfgetImportantResearchHighlights} = getImportantResearchHighlightsSlice.actions
