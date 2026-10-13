import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const GETSTUDENTPUBLICATIONBYID = createAsyncThunk(
  "getStudentPublicationById/getStudentPublicationById",
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

const getStudentPublicationByIdSlice = createSlice({
  name: "getStudentPublicationByIdSlice",
  initialState: {
    getStudentPublicationById: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetStudentPublicationById: (state) => {
      state.getStudentPublicationById.loading = false;
      state.getStudentPublicationById.error = false;
      state.getStudentPublicationById.data = {};
      state.getStudentPublicationById.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETSTUDENTPUBLICATIONBYID.fulfilled, (state, action) => {
      state.getStudentPublicationById = {
        ...state.getStudentPublicationById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETSTUDENTPUBLICATIONBYID.pending, (state, action) => {
      state.getStudentPublicationById = {
        ...state.getStudentPublicationById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETSTUDENTPUBLICATIONBYID.rejected, (state, action) => {
      state.getStudentPublicationById = {
        ...state.getStudentPublicationById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getStudentPublicationByIdAction = {
  GETSTUDENTPUBLICATIONBYID,
};

export { getStudentPublicationByIdAction };
export default getStudentPublicationByIdSlice.reducer;
export const { setInitialStateOfgetStudentPublicationById } =
  getStudentPublicationByIdSlice.actions;
