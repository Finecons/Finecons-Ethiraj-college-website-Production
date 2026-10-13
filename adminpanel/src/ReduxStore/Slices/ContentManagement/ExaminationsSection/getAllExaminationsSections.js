import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const GETALLEXAMINATIONSSECTIONS = createAsyncThunk(
  "getAllExaminationsSections/getAllExaminationsSections",
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

const getAllExaminationsSectionsSlice = createSlice({
  name: "getAllExaminationsSectionsSlice",
  initialState: {
    getAllExaminationsSections: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GETALLEXAMINATIONSSECTIONS.pending, (state) => {
        state.getAllExaminationsSections.loading = true;
        state.getAllExaminationsSections.error = false;
      })
      .addCase(GETALLEXAMINATIONSSECTIONS.fulfilled, (state, action) => {
        state.getAllExaminationsSections.loading = false;
        state.getAllExaminationsSections.payload = action.payload;
      })
      .addCase(GETALLEXAMINATIONSSECTIONS.rejected, (state, action) => {
        state.getAllExaminationsSections.loading = false;
        state.getAllExaminationsSections.error = true;
        state.getAllExaminationsSections.message = action.payload.message;
      });
  },
});

const getAllExaminationsSectionsAction = {
  GETALLEXAMINATIONSSECTIONS,
};

export { getAllExaminationsSectionsAction };
export default getAllExaminationsSectionsSlice.reducer;
