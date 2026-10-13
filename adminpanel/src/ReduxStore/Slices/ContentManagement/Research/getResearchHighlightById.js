import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const GETRESEARCHHIGHLIGHTBYID = createAsyncThunk(
  "getResearchHighlightById/getResearchHighlightById",
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

const getResearchHighlightByIdSlice = createSlice({
  name: "getResearchHighlightByIdSlice",
  initialState: {
    getResearchHighlightById: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetResearchHighlightById: (state) => {
      state.getResearchHighlightById.loading = false;
      state.getResearchHighlightById.error = false;
      state.getResearchHighlightById.data = {};
      state.getResearchHighlightById.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETRESEARCHHIGHLIGHTBYID.fulfilled, (state, action) => {
      state.getResearchHighlightById = {
        ...state.getResearchHighlightById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETRESEARCHHIGHLIGHTBYID.pending, (state, action) => {
      state.getResearchHighlightById = {
        ...state.getResearchHighlightById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETRESEARCHHIGHLIGHTBYID.rejected, (state, action) => {
      state.getResearchHighlightById = {
        ...state.getResearchHighlightById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getResearchHighlightByIdAction = {
  GETRESEARCHHIGHLIGHTBYID,
};

export { getResearchHighlightByIdAction };
export default getResearchHighlightByIdSlice.reducer;
export const { setInitialStateOfgetResearchHighlightById } =
  getResearchHighlightByIdSlice.actions;
