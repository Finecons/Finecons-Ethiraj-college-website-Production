import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const GETALLSTUDENTPUBLICATIONS = createAsyncThunk(
  "getAllStudentPublications/getAllStudentPublications",
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

const getAllStudentPublicationsSlice = createSlice({
  name: "getAllStudentPublicationsSlice",
  initialState: {
    getAllStudentPublications: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetAllStudentPublications: (state) => {
      state.getAllStudentPublications.loading = false;
      state.getAllStudentPublications.error = false;
      state.getAllStudentPublications.data = [];
      state.getAllStudentPublications.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLSTUDENTPUBLICATIONS.fulfilled, (state, action) => {
      state.getAllStudentPublications = {
        ...state.getAllStudentPublications,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLSTUDENTPUBLICATIONS.pending, (state, action) => {
      state.getAllStudentPublications = {
        ...state.getAllStudentPublications,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLSTUDENTPUBLICATIONS.rejected, (state, action) => {
      state.getAllStudentPublications = {
        ...state.getAllStudentPublications,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllStudentPublicationsAction = {
  GETALLSTUDENTPUBLICATIONS,
};

export { getAllStudentPublicationsAction };
export default getAllStudentPublicationsSlice.reducer;
export const { setInitialStateOfgetAllStudentPublications } =
  getAllStudentPublicationsSlice.actions;
