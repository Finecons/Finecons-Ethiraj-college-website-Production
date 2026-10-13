

/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// GETPERMISSIONSFORAUTHUSER
// GETPERMISSIONSFORAUTHUSER
const GETPERMISSIONSFORAUTHUSER= createAsyncThunk(
  "getPermissionsForAuthUser/getPermissionsForAuthUser",
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
const getPermissionsForAuthUserSlice = createSlice({
  name: "getPermissionsForAuthUserSlice",
  initialState: {
    getPermissionsForAuthUser: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetPermissionsForAuthUser: (state) => {
        state.getPermissionsForAuthUser.loading = false
        state.getPermissionsForAuthUser.error = false
        state.getPermissionsForAuthUser.data = []
        state.getPermissionsForAuthUser.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETPERMISSIONSFORAUTHUSER.fulfilled, (state, action) => {
      state.getPermissionsForAuthUser = {
        ...state.getPermissionsForAuthUser,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETPERMISSIONSFORAUTHUSER.pending, (state, action) => {
      state.getPermissionsForAuthUser = {
        ...state.getPermissionsForAuthUser,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETPERMISSIONSFORAUTHUSER.rejected, (state, action) => {
      state.getPermissionsForAuthUser = {
        ...state.getPermissionsForAuthUser,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getPermissionsForAuthUserAction = {
    GETPERMISSIONSFORAUTHUSER,
};

export { getPermissionsForAuthUserAction };
export default getPermissionsForAuthUserSlice.reducer;
export const {setInitialStateOfgetPermissionsForAuthUser} = getPermissionsForAuthUserSlice.actions
