import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const UPDATERESEARCHHIGHLIGHT = createAsyncThunk(
  "updateResearchHighlight/updateResearchHighlight",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        Success: data?.data.Success,
        Message: data?.data.Message,
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

const updateResearchHighlightSlice = createSlice({
  name: "updateResearchHighlightSlice",
  initialState: {
    updateResearchHighlight: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfupdateResearchHighlight: (state) => {
      state.updateResearchHighlight.loading = false;
      state.updateResearchHighlight.error = false;
      state.updateResearchHighlight.data = [];
      state.updateResearchHighlight.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATERESEARCHHIGHLIGHT.fulfilled, (state, action) => {
      state.updateResearchHighlight = {
        ...state.updateResearchHighlight,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATERESEARCHHIGHLIGHT.pending, (state, action) => {
      state.updateResearchHighlight = {
        ...state.updateResearchHighlight,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATERESEARCHHIGHLIGHT.rejected, (state, action) => {
      state.updateResearchHighlight = {
        ...state.updateResearchHighlight,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateResearchHighlightAction = {
  UPDATERESEARCHHIGHLIGHT,
};

export { updateResearchHighlightAction };
export default updateResearchHighlightSlice.reducer;
export const { setInitialStateOfupdateResearchHighlight } =
  updateResearchHighlightSlice.actions;
