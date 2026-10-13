

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// getAllRolesWithModules
// GETALLROLESWITHMODULES
const GETALLROLESWITHMODULES= createAsyncThunk(
  "getAllRolesWithModules/getAllRolesWithModules",
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
const getAllRolesWithModulesSlice = createSlice({
  name: "getAllRolesWithModulesSlice",
  initialState: {
    getAllRolesWithModules: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllRolesWithModules: (state) => {
        state.getAllRolesWithModules.loading = false
        state.getAllRolesWithModules.error = false
        state.getAllRolesWithModules.data = []
        state.getAllRolesWithModules.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLROLESWITHMODULES.fulfilled, (state, action) => {
      state.getAllRolesWithModules = {
        ...state.getAllRolesWithModules,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLROLESWITHMODULES.pending, (state, action) => {
      state.getAllRolesWithModules = {
        ...state.getAllRolesWithModules,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLROLESWITHMODULES.rejected, (state, action) => {
      state.getAllRolesWithModules = {
        ...state.getAllRolesWithModules,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllRolesWithModulesAction = {
    GETALLROLESWITHMODULES,
};

export { getAllRolesWithModulesAction };
export default getAllRolesWithModulesSlice.reducer;
export const {setInitialStateOfgetAllRolesWithModules} = getAllRolesWithModulesSlice.actions
