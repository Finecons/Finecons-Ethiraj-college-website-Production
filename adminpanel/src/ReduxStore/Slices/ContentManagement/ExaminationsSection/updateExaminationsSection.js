import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const UPDATEEXAMINATIONSSECTION = createAsyncThunk(
  "updateExaminationsSection/updateExaminationsSection",
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

const updateExaminationsSectionSlice = createSlice({
  name: "updateExaminationsSectionSlice",
  initialState: {
    updateExaminationsSection: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UPDATEEXAMINATIONSSECTION.pending, (state) => {
        state.updateExaminationsSection.loading = true;
        state.updateExaminationsSection.error = false;
      })
      .addCase(UPDATEEXAMINATIONSSECTION.fulfilled, (state, action) => {
        state.updateExaminationsSection.loading = false;
        state.updateExaminationsSection.payload = action.payload;
      })
      .addCase(UPDATEEXAMINATIONSSECTION.rejected, (state, action) => {
        state.updateExaminationsSection.loading = false;
        state.updateExaminationsSection.error = true;
        state.updateExaminationsSection.message = action.payload.message;
      });
  },
});

const updateExaminationsSectionAction = {
  UPDATEEXAMINATIONSSECTION,
};

export { updateExaminationsSectionAction };
export default updateExaminationsSectionSlice.reducer;
