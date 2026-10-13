import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const ADDEXAMINATIONSSECTION = createAsyncThunk(
  "addExaminationsSection/addExaminationsSection",
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

const addExaminationsSectionSlice = createSlice({
  name: "addExaminationsSectionSlice",
  initialState: {
    addExaminationsSection: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ADDEXAMINATIONSSECTION.pending, (state) => {
        state.addExaminationsSection.loading = true;
        state.addExaminationsSection.error = false;
      })
      .addCase(ADDEXAMINATIONSSECTION.fulfilled, (state, action) => {
        state.addExaminationsSection.loading = false;
        state.addExaminationsSection.payload = action.payload;
      })
      .addCase(ADDEXAMINATIONSSECTION.rejected, (state, action) => {
        state.addExaminationsSection.loading = false;
        state.addExaminationsSection.error = true;
        state.addExaminationsSection.message = action.payload.message;
      });
  },
});

const addExaminationsSectionAction = {
  ADDEXAMINATIONSSECTION,
};

export { addExaminationsSectionAction };
export default addExaminationsSectionSlice.reducer;
