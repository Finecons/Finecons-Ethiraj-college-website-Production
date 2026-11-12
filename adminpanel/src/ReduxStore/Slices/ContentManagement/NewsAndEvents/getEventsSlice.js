import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const GETEVENTS = createAsyncThunk(
  "getEvents/getEvents",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method || "get",
        payload?.apiName || "getEvents"
      );
      return {
        ...defaultState.List,
        message: data?.data?.Message,
        data: data?.data?.data || [],
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

const getEventsSlice = createSlice({
  name: "getEventsSlice",
  initialState: {
    getEvents: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GETEVENTS.pending, (state) => {
        state.getEvents.loading = true;
        state.getEvents.error = false;
      })
      .addCase(GETEVENTS.fulfilled, (state, action) => {
        state.getEvents.loading = false;
        state.getEvents.payload = action.payload;
      })
      .addCase(GETEVENTS.rejected, (state, action) => {
        state.getEvents.loading = false;
        state.getEvents.error = true;
        state.getEvents.message = action?.payload?.message || "Failed to fetch events";
      });
  },
});

const getEventsAction = {
  GETEVENTS,
};

export { getEventsAction };
export default getEventsSlice.reducer;

