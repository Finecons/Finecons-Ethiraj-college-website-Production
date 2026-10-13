



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const ADDDEPARTMENT= createAsyncThunk(
  "addDepartment/addDepartment",
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
const addDepartmentSlice = createSlice({
  name: "addDepartmentSlice",
  initialState: {
    addDepartment: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfaddDepartment: (state) => {
        state.addDepartment.loading = false
        state.addDepartment.error = false
        state.addDepartment.data = []
        state.addDepartment.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(ADDDEPARTMENT.fulfilled, (state, action) => {
      state.addDepartment = {
        ...state.addDepartment,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDDEPARTMENT.pending, (state, action) => {
      state.addDepartment = {
        ...state.addDepartment,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDDEPARTMENT.rejected, (state, action) => {
      state.addDepartment = {
        ...state.addDepartment,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addDepartmentAction = {
    ADDDEPARTMENT,
};

export { addDepartmentAction };
export default addDepartmentSlice.reducer;
export const {setInitialStateOfaddDepartment} = addDepartmentSlice.actions
