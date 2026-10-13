import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const GETALLRESEARCHHIGHLIGHTS = createAsyncThunk(
  "getAllResearchHighlights/getAllResearchHighlights",
  async (payload = {}, { rejectWithValue }) => {
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

const getAllResearchHighlightsSlice = createSlice({
  name: "getAllResearchHighlightsSlice",
  initialState: {
    getAllResearchHighlights: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetAllResearchHighlights: (state) => {
      state.getAllResearchHighlights.loading = false;
      state.getAllResearchHighlights.error = false;
      state.getAllResearchHighlights.data = [];
      state.getAllResearchHighlights.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLRESEARCHHIGHLIGHTS.fulfilled, (state, action) => {
      state.getAllResearchHighlights = {
        ...state.getAllResearchHighlights,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLRESEARCHHIGHLIGHTS.pending, (state, action) => {
      state.getAllResearchHighlights = {
        ...state.getAllResearchHighlights,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLRESEARCHHIGHLIGHTS.rejected, (state, action) => {
      state.getAllResearchHighlights = {
        ...state.getAllResearchHighlights,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllResearchHighlightsAction = {
  GETALLRESEARCHHIGHLIGHTS,
};

export { getAllResearchHighlightsAction };
export default getAllResearchHighlightsSlice.reducer;
export const { setInitialStateOfgetAllResearchHighlights } =
  getAllResearchHighlightsSlice.actions;
