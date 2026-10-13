



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const ADDFACULTY= createAsyncThunk(
  "addFaculty/addFaculty",
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
const addFacultySlice = createSlice({
  name: "addFacultySlice",
  initialState: {
    addFaculty: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfaddFaculty: (state) => {
        state.addFaculty.loading = false
        state.addFaculty.error = false
        state.addFaculty.data = []
        state.addFaculty.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(ADDFACULTY.fulfilled, (state, action) => {
      state.addFaculty = {
        ...state.addFaculty,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDFACULTY.pending, (state, action) => {
      state.addFaculty = {
        ...state.addFaculty,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDFACULTY.rejected, (state, action) => {
      state.addFaculty = {
        ...state.addFaculty,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addFacultyAction = {
    ADDFACULTY,
};

export { addFacultyAction };
export default addFacultySlice.reducer;
export const {setInitialStateOfaddFaculty} = addFacultySlice.actions
