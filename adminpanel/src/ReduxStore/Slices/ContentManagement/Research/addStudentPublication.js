import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const ADDSTUDENTPUBLICATION = createAsyncThunk(
  "addStudentPublication/addStudentPublication",
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

const addStudentPublicationSlice = createSlice({
  name: "addStudentPublicationSlice",
  initialState: {
    addStudentPublication: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfaddStudentPublication: (state) => {
      state.addStudentPublication.loading = false;
      state.addStudentPublication.error = false;
      state.addStudentPublication.data = [];
      state.addStudentPublication.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ADDSTUDENTPUBLICATION.fulfilled, (state, action) => {
      state.addStudentPublication = {
        ...state.addStudentPublication,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDSTUDENTPUBLICATION.pending, (state, action) => {
      state.addStudentPublication = {
        ...state.addStudentPublication,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDSTUDENTPUBLICATION.rejected, (state, action) => {
      state.addStudentPublication = {
        ...state.addStudentPublication,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addStudentPublicationAction = {
  ADDSTUDENTPUBLICATION,
};

export { addStudentPublicationAction };
export default addStudentPublicationSlice.reducer;
export const { setInitialStateOfaddStudentPublication } =
  addStudentPublicationSlice.actions;
