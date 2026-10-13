



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const UPDATEDEPARTMENT= createAsyncThunk(
  "updateDepartment/updateDepartment",
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
const updateDepartmentSlice = createSlice({
  name: "updateDepartmentSlice",
  initialState: {
    updateDepartment: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfupdateDepartment: (state) => {
        state.updateDepartment.loading = false
        state.updateDepartment.error = false
        state.updateDepartment.data = []
        state.updateDepartment.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEDEPARTMENT.fulfilled, (state, action) => {
      state.updateDepartment = {
        ...state.updateDepartment,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEDEPARTMENT.pending, (state, action) => {
      state.updateDepartment = {
        ...state.updateDepartment,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEDEPARTMENT.rejected, (state, action) => {
      state.updateDepartment = {
        ...state.updateDepartment,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateDepartmentAction = {
    UPDATEDEPARTMENT,
};

export { updateDepartmentAction };
export default updateDepartmentSlice.reducer;
export const {setInitialStateOfupdateDepartment} = updateDepartmentSlice.actions
