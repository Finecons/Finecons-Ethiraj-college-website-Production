




/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// UPDATEALLPERMISSIONSFORAUTHUSER
// UPDATEALLPERMISSIONSFORAUTHUSER
const UPDATEALLPERMISSIONSFORAUTHUSER= createAsyncThunk(
  "updateAllPermissionsForAuthUser/updateAllPermissionsForAuthUser",
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
const updateAllPermissionsForAuthUserSlice = createSlice({
  name: "updateAllPermissionsForAuthUserSlice",
  initialState: {
    updateAllPermissionsForAuthUser: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfupdateAllPermissionsForAuthUser: (state) => {
        state.updateAllPermissionsForAuthUser.loading = false
        state.updateAllPermissionsForAuthUser.error = false
        state.updateAllPermissionsForAuthUser.data = []
        state.updateAllPermissionsForAuthUser.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEALLPERMISSIONSFORAUTHUSER.fulfilled, (state, action) => {
      state.updateAllPermissionsForAuthUser = {
        ...state.updateAllPermissionsForAuthUser,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEALLPERMISSIONSFORAUTHUSER.pending, (state, action) => {
      state.updateAllPermissionsForAuthUser = {
        ...state.updateAllPermissionsForAuthUser,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEALLPERMISSIONSFORAUTHUSER.rejected, (state, action) => {
      state.updateAllPermissionsForAuthUser = {
        ...state.updateAllPermissionsForAuthUser,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateAllPermissionsForAuthUserAction = {
    UPDATEALLPERMISSIONSFORAUTHUSER,
};

export { updateAllPermissionsForAuthUserAction };
export default updateAllPermissionsForAuthUserSlice.reducer;
export const {setInitialStateOfupdateAllPermissionsForAuthUser} = updateAllPermissionsForAuthUserSlice.actions
