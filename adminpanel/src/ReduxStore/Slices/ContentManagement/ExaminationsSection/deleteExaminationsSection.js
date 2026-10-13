import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const DELETEEXAMINATIONSSECTION = createAsyncThunk(
  "deleteExaminationsSection/deleteExaminationsSection",
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

const deleteExaminationsSectionSlice = createSlice({
  name: "deleteExaminationsSectionSlice",
  initialState: {
    deleteExaminationsSection: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(DELETEEXAMINATIONSSECTION.pending, (state) => {
        state.deleteExaminationsSection.loading = true;
        state.deleteExaminationsSection.error = false;
      })
      .addCase(DELETEEXAMINATIONSSECTION.fulfilled, (state, action) => {
        state.deleteExaminationsSection.loading = false;
        state.deleteExaminationsSection.payload = action.payload;
      })
      .addCase(DELETEEXAMINATIONSSECTION.rejected, (state, action) => {
        state.deleteExaminationsSection.loading = false;
        state.deleteExaminationsSection.error = true;
        state.deleteExaminationsSection.message = action.payload.message;
      });
  },
});

const deleteExaminationsSectionAction = {
  DELETEEXAMINATIONSSECTION,
};

export { deleteExaminationsSectionAction };
export default deleteExaminationsSectionSlice.reducer;
