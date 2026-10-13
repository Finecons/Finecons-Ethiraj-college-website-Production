import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

const UPDATEFACULTYPUBLICATION = createAsyncThunk(
  "updateFacultyPublication/updateFacultyPublication",
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

const updateFacultyPublicationSlice = createSlice({
  name: "updateFacultyPublicationSlice",
  initialState: {
    updateFacultyPublication: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfupdateFacultyPublication: (state) => {
      state.updateFacultyPublication.loading = false;
      state.updateFacultyPublication.error = false;
      state.updateFacultyPublication.data = [];
      state.updateFacultyPublication.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEFACULTYPUBLICATION.fulfilled, (state, action) => {
      state.updateFacultyPublication = {
        ...state.updateFacultyPublication,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEFACULTYPUBLICATION.pending, (state, action) => {
      state.updateFacultyPublication = {
        ...state.updateFacultyPublication,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEFACULTYPUBLICATION.rejected, (state, action) => {
      state.updateFacultyPublication = {
        ...state.updateFacultyPublication,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateFacultyPublicationAction = {
  UPDATEFACULTYPUBLICATION,
};

export { updateFacultyPublicationAction };
export default updateFacultyPublicationSlice.reducer;
export const { setInitialStateOfupdateFacultyPublication } =
  updateFacultyPublicationSlice.actions;
