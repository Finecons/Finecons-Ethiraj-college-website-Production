import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const DELETENEWSEVENT = createAsyncThunk(
  "deleteNewsEvent/deleteNewsEvent",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method || "delete",
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

const deleteNewsEventSlice = createSlice({
  name: "deleteNewsEventSlice",
  initialState: {
    deleteNewsEvent: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(DELETENEWSEVENT.pending, (state) => {
        state.deleteNewsEvent.loading = true;
        state.deleteNewsEvent.error = false;
      })
      .addCase(DELETENEWSEVENT.fulfilled, (state, action) => {
        state.deleteNewsEvent.loading = false;
        state.deleteNewsEvent.payload = action.payload;
      })
      .addCase(DELETENEWSEVENT.rejected, (state, action) => {
        state.deleteNewsEvent.loading = false;
        state.deleteNewsEvent.error = true;
        state.deleteNewsEvent.message = action?.payload?.message || "Failed to delete event";
      });
  },
});

const deleteNewsEventAction = {
  DELETENEWSEVENT,
};

export { deleteNewsEventAction };
export default deleteNewsEventSlice.reducer;

