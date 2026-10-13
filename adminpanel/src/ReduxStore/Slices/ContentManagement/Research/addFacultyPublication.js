import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const ADDFACULTYPUBLICATION = createAsyncThunk(
  "addFacultyPublication/addFacultyPublication",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        payload?.data,
        payload?.method,
        payload?.apiName
      );
      return {
        ...defaultState.List,
        Success: data?.data.Success,
        Message: data?.data.Message,
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

const addFacultyPublicationSlice = createSlice({
  name: "addFacultyPublicationSlice",
  initialState: {
    addFacultyPublication: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfaddFacultyPublication: (state) => {
      state.addFacultyPublication.loading = false;
      state.addFacultyPublication.error = false;
      state.addFacultyPublication.data = [];
      state.addFacultyPublication.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ADDFACULTYPUBLICATION.fulfilled, (state, action) => {
      state.addFacultyPublication = {
        ...state.addFacultyPublication,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDFACULTYPUBLICATION.pending, (state, action) => {
      state.addFacultyPublication = {
        ...state.addFacultyPublication,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDFACULTYPUBLICATION.rejected, (state, action) => {
      state.addFacultyPublication = {
        ...state.addFacultyPublication,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addFacultyPublicationAction = {
  ADDFACULTYPUBLICATION,
};

export { addFacultyPublicationAction };
export default addFacultyPublicationSlice.reducer;
export const { setInitialStateOfaddFacultyPublication } =
  addFacultyPublicationSlice.actions;
