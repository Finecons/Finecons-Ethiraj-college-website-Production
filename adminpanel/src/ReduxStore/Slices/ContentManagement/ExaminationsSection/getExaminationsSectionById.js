import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const GETEXAMINATIONSSECTIONBYID = createAsyncThunk(
  "getExaminationsSectionById/getExaminationsSectionById",
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

const getExaminationsSectionByIdSlice = createSlice({
  name: "getExaminationsSectionByIdSlice",
  initialState: {
    getExaminationsSectionById: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetExaminationsSectionById: (state) => {
      state.getExaminationsSectionById.loading = false;
      state.getExaminationsSectionById.error = false;
      state.getExaminationsSectionById.data = [];
      state.getExaminationsSectionById.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GETEXAMINATIONSSECTIONBYID.pending, (state) => {
        state.getExaminationsSectionById.loading = true;
        state.getExaminationsSectionById.error = false;
      })
      .addCase(GETEXAMINATIONSSECTIONBYID.fulfilled, (state, action) => {
        state.getExaminationsSectionById.loading = false;
        state.getExaminationsSectionById.payload = action.payload;
      })
      .addCase(GETEXAMINATIONSSECTIONBYID.rejected, (state, action) => {
        state.getExaminationsSectionById.loading = false;
        state.getExaminationsSectionById.error = true;
        state.getExaminationsSectionById.message = action.payload.message;
      });
  },
});

const getExaminationsSectionByIdAction = {
  GETEXAMINATIONSSECTIONBYID,
};

export { getExaminationsSectionByIdAction };
export default getExaminationsSectionByIdSlice.reducer;
export const { setInitialStateOfgetExaminationsSectionById } = getExaminationsSectionByIdSlice.actions;
