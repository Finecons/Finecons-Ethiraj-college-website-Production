import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const ADDNEWSEVENT = createAsyncThunk(
  "addNewsEvent/addNewsEvent",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method || "post",
        payload?.apiName || "addNewsEvent"
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

const addNewsEventSlice = createSlice({
  name: "addNewsEventSlice",
  initialState: {
    addNewsEvent: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ADDNEWSEVENT.pending, (state) => {
        state.addNewsEvent.loading = true;
        state.addNewsEvent.error = false;
      })
      .addCase(ADDNEWSEVENT.fulfilled, (state, action) => {
        state.addNewsEvent.loading = false;
        state.addNewsEvent.payload = action.payload;
      })
      .addCase(ADDNEWSEVENT.rejected, (state, action) => {
        state.addNewsEvent.loading = false;
        state.addNewsEvent.error = true;
        state.addNewsEvent.message = action?.payload?.message || "Failed to add event";
      });
  },
});

const addNewsEventAction = {
  ADDNEWSEVENT,
};

export { addNewsEventAction };
export default addNewsEventSlice.reducer;

