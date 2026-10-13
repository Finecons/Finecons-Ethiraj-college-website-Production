



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const GETALLDEPARTMENTS= createAsyncThunk(
  "getAllDepartments/getAllDepartments",
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
const getAllDepartmentsSlice = createSlice({
  name: "getAllDepartmentsSlice",
  initialState: {
    getAllDepartments: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllDepartments: (state) => {
        state.getAllDepartments.loading = false
        state.getAllDepartments.error = false
        state.getAllDepartments.data = []
        state.getAllDepartments.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLDEPARTMENTS.fulfilled, (state, action) => {
      state.getAllDepartments = {
        ...state.getAllDepartments,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLDEPARTMENTS.pending, (state, action) => {
      state.getAllDepartments = {
        ...state.getAllDepartments,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLDEPARTMENTS.rejected, (state, action) => {
      state.getAllDepartments = {
        ...state.getAllDepartments,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllDepartmentsAction = {
    GETALLDEPARTMENTS,
};

export { getAllDepartmentsAction };
export default getAllDepartmentsSlice.reducer;
export const {setInitialStateOfgetAllDepartments} = getAllDepartmentsSlice.actions
