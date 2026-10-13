




/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const UPDATEFACULTY= createAsyncThunk(
  "updateFaculty/updateFaculty",
  // eslint-disable-next-line default-param-last
  async (
    // eslint-disable-next-line default-param-last
    payload = {},
    { rejectWithValue }
  ) => {
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

// PublishPostSlice
const updateFacultySlice = createSlice({
  name: "updateFacultySlice",
  initialState: {
    updateFaculty: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfupdateFaculty: (state) => {
        state.updateFaculty.loading = false
        state.updateFaculty.error = false
        state.updateFaculty.data = []
        state.updateFaculty.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEFACULTY.fulfilled, (state, action) => {
      state.updateFaculty = {
        ...state.updateFaculty,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEFACULTY.pending, (state, action) => {
      state.updateFaculty = {
        ...state.updateFaculty,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEFACULTY.rejected, (state, action) => {
      state.updateFaculty = {
        ...state.updateFaculty,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateFacultyAction = {
    UPDATEFACULTY,
};

export { updateFacultyAction };
export default updateFacultySlice.reducer;
export const {setInitialStateOfupdateFaculty} = updateFacultySlice.actions
