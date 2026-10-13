import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const GETALLFACULTYPUBLICATIONS = createAsyncThunk(
  "getAllFacultyPublications/getAllFacultyPublications",
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

const getAllFacultyPublicationsSlice = createSlice({
  name: "getAllFacultyPublicationsSlice",
  initialState: {
    getAllFacultyPublications: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetAllFacultyPublications: (state) => {
      state.getAllFacultyPublications.loading = false;
      state.getAllFacultyPublications.error = false;
      state.getAllFacultyPublications.data = [];
      state.getAllFacultyPublications.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLFACULTYPUBLICATIONS.fulfilled, (state, action) => {
      state.getAllFacultyPublications = {
        ...state.getAllFacultyPublications,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLFACULTYPUBLICATIONS.pending, (state, action) => {
      state.getAllFacultyPublications = {
        ...state.getAllFacultyPublications,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLFACULTYPUBLICATIONS.rejected, (state, action) => {
      state.getAllFacultyPublications = {
        ...state.getAllFacultyPublications,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllFacultyPublicationsAction = {
  GETALLFACULTYPUBLICATIONS,
};

export { getAllFacultyPublicationsAction };
export default getAllFacultyPublicationsSlice.reducer;
export const { setInitialStateOfgetAllFacultyPublications } =
  getAllFacultyPublicationsSlice.actions;
