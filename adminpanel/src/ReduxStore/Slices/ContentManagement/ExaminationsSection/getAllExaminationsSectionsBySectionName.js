import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const GETALLEXAMINATIONSSECTIONSBYSECTIONNAME = createAsyncThunk(
  "getAllExaminationsSectionsBySectionName/getAllExaminationsSectionsBySectionName",
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

const getAllExaminationsSectionsBySectionNameSlice = createSlice({
  name: "getAllExaminationsSectionsBySectionNameSlice",
  initialState: {
    getAllExaminationsSectionsBySectionName: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GETALLEXAMINATIONSSECTIONSBYSECTIONNAME.pending, (state) => {
        state.getAllExaminationsSectionsBySectionName.loading = true;
        state.getAllExaminationsSectionsBySectionName.error = false;
      })
      .addCase(GETALLEXAMINATIONSSECTIONSBYSECTIONNAME.fulfilled, (state, action) => {
        state.getAllExaminationsSectionsBySectionName.loading = false;
        state.getAllExaminationsSectionsBySectionName.payload = action.payload;
      })
      .addCase(GETALLEXAMINATIONSSECTIONSBYSECTIONNAME.rejected, (state, action) => {
        state.getAllExaminationsSectionsBySectionName.loading = false;
        state.getAllExaminationsSectionsBySectionName.error = true;
        state.getAllExaminationsSectionsBySectionName.message = action.payload.message;
      });
  },
});

const getAllExaminationsSectionsBySectionNameAction = {
  GETALLEXAMINATIONSSECTIONSBYSECTIONNAME,
};

export { getAllExaminationsSectionsBySectionNameAction };
export default getAllExaminationsSectionsBySectionNameSlice.reducer;
