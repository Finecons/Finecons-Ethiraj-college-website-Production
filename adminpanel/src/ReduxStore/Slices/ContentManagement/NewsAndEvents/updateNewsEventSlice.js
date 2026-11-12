import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const UPDATENEWSEVENT = createAsyncThunk(
  "updateNewsEvent/updateNewsEvent",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method || "put",
        payload?.apiName
      );
      return {
        ...defaultState.List,
        message: data?.data?.Message,
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

const updateNewsEventSlice = createSlice({
  name: "updateNewsEventSlice",
  initialState: {
    updateNewsEvent: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UPDATENEWSEVENT.pending, (state) => {
        state.updateNewsEvent.loading = true;
        state.updateNewsEvent.error = false;
      })
      .addCase(UPDATENEWSEVENT.fulfilled, (state, action) => {
        state.updateNewsEvent.loading = false;
        state.updateNewsEvent.payload = action.payload;
      })
      .addCase(UPDATENEWSEVENT.rejected, (state, action) => {
        state.updateNewsEvent.loading = false;
        state.updateNewsEvent.error = true;
        state.updateNewsEvent.message = action?.payload?.message || "Failed to update event";
      });
  },
});

const updateNewsEventAction = {
  UPDATENEWSEVENT,
};

export { updateNewsEventAction };
export default updateNewsEventSlice.reducer;

