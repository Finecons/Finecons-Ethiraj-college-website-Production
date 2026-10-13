import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const GETFACULTYPUBLICATIONBYID = createAsyncThunk(
  "getFacultyPublicationById/getFacultyPublicationById",
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

const getFacultyPublicationByIdSlice = createSlice({
  name: "getFacultyPublicationByIdSlice",
  initialState: {
    getFacultyPublicationById: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetFacultyPublicationById: (state) => {
      state.getFacultyPublicationById.loading = false;
      state.getFacultyPublicationById.error = false;
      state.getFacultyPublicationById.data = {};
      state.getFacultyPublicationById.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETFACULTYPUBLICATIONBYID.fulfilled, (state, action) => {
      state.getFacultyPublicationById = {
        ...state.getFacultyPublicationById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETFACULTYPUBLICATIONBYID.pending, (state, action) => {
      state.getFacultyPublicationById = {
        ...state.getFacultyPublicationById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETFACULTYPUBLICATIONBYID.rejected, (state, action) => {
      state.getFacultyPublicationById = {
        ...state.getFacultyPublicationById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getFacultyPublicationByIdAction = {
  GETFACULTYPUBLICATIONBYID,
};

export { getFacultyPublicationByIdAction };
export default getFacultyPublicationByIdSlice.reducer;
export const { setInitialStateOfgetFacultyPublicationById } =
  getFacultyPublicationByIdSlice.actions;
