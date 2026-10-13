

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// getAllRoles
// GETALLROLES
const GETALLROLES= createAsyncThunk(
  "getAllRoles/getAllRoles",
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
const getAllRolesSlice = createSlice({
  name: "getAllRolesSlice",
  initialState: {
    getAllRoles: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllRoles: (state) => {
        state.getAllRoles.loading = false
        state.getAllRoles.error = false
        state.getAllRoles.data = []
        state.getAllRoles.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLROLES.fulfilled, (state, action) => {
      state.getAllRoles = {
        ...state.getAllRoles,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLROLES.pending, (state, action) => {
      state.getAllRoles = {
        ...state.getAllRoles,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLROLES.rejected, (state, action) => {
      state.getAllRoles = {
        ...state.getAllRoles,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllRolesAction = {
    GETALLROLES,
};

export { getAllRolesAction };
export default getAllRolesSlice.reducer;
export const {setInitialStateOfgetAllRoles} = getAllRolesSlice.actions
