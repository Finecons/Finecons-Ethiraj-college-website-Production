import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const UPDATESTUDENTPUBLICATION = createAsyncThunk(
  "updateStudentPublication/updateStudentPublication",
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

const updateStudentPublicationSlice = createSlice({
  name: "updateStudentPublicationSlice",
  initialState: {
    updateStudentPublication: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfupdateStudentPublication: (state) => {
      state.updateStudentPublication.loading = false;
      state.updateStudentPublication.error = false;
      state.updateStudentPublication.data = [];
      state.updateStudentPublication.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATESTUDENTPUBLICATION.fulfilled, (state, action) => {
      state.updateStudentPublication = {
        ...state.updateStudentPublication,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATESTUDENTPUBLICATION.pending, (state, action) => {
      state.updateStudentPublication = {
        ...state.updateStudentPublication,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATESTUDENTPUBLICATION.rejected, (state, action) => {
      state.updateStudentPublication = {
        ...state.updateStudentPublication,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateStudentPublicationAction = {
  UPDATESTUDENTPUBLICATION,
};

export { updateStudentPublicationAction };
export default updateStudentPublicationSlice.reducer;
export const { setInitialStateOfupdateStudentPublication } =
  updateStudentPublicationSlice.actions;
