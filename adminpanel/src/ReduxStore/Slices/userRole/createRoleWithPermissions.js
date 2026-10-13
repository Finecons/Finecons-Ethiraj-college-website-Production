

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// createRoleWithPermissions
// CREATEROLEWITHPERMISSIONS
const CREATEROLEWITHPERMISSIONS= createAsyncThunk(
  "createRoleWithPermissions/createRoleWithPermissions",
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
const createRoleWithPermissionsSlice = createSlice({
  name: "createRoleWithPermissionsSlice",
  initialState: {
    createRoleWithPermissions: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfcreateRoleWithPermissions: (state) => {
        state.createRoleWithPermissions.loading = false
        state.createRoleWithPermissions.error = false
        state.createRoleWithPermissions.data = []
        state.createRoleWithPermissions.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(CREATEROLEWITHPERMISSIONS.fulfilled, (state, action) => {
      state.createRoleWithPermissions = {
        ...state.createRoleWithPermissions,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(CREATEROLEWITHPERMISSIONS.pending, (state, action) => {
      state.createRoleWithPermissions = {
        ...state.createRoleWithPermissions,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(CREATEROLEWITHPERMISSIONS.rejected, (state, action) => {
      state.createRoleWithPermissions = {
        ...state.createRoleWithPermissions,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const createRoleWithPermissionsAction = {
    CREATEROLEWITHPERMISSIONS,
};

export { createRoleWithPermissionsAction };
export default createRoleWithPermissionsSlice.reducer;
export const {setInitialStateOfcreateRoleWithPermissions} = createRoleWithPermissionsSlice.actions
