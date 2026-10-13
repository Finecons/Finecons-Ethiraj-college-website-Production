import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const ADDRESEARCHHIGHLIGHT = createAsyncThunk(
  "addResearchHighlight/addResearchHighlight",
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

const addResearchHighlightSlice = createSlice({
  name: "addResearchHighlightSlice",
  initialState: {
    addResearchHighlight: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfaddResearchHighlight: (state) => {
      state.addResearchHighlight.loading = false;
      state.addResearchHighlight.error = false;
      state.addResearchHighlight.data = [];
      state.addResearchHighlight.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ADDRESEARCHHIGHLIGHT.fulfilled, (state, action) => {
      state.addResearchHighlight = {
        ...state.addResearchHighlight,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDRESEARCHHIGHLIGHT.pending, (state, action) => {
      state.addResearchHighlight = {
        ...state.addResearchHighlight,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDRESEARCHHIGHLIGHT.rejected, (state, action) => {
      state.addResearchHighlight = {
        ...state.addResearchHighlight,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addResearchHighlightAction = {
  ADDRESEARCHHIGHLIGHT,
};

export { addResearchHighlightAction };
export default addResearchHighlightSlice.reducer;
export const { setInitialStateOfaddResearchHighlight } =
  addResearchHighlightSlice.actions;
