
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getDepartmentById
// getDepartmentById


const GETDEPARTMENTBYID= createAsyncThunk(
  "getDepartmentById/getDepartmentById",
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
const getDepartmentByIdSlice = createSlice({
  name: "getDepartmentByIdSlice",
  initialState: {
    getDepartmentById: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetDepartmentById: (state) => {
        state.getDepartmentById.loading = false
        state.getDepartmentById.error = false
        state.getDepartmentById.data = []
        state.getDepartmentById.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETDEPARTMENTBYID.fulfilled, (state, action) => {
      state.getDepartmentById = {
        ...state.getDepartmentById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETDEPARTMENTBYID.pending, (state, action) => {
      state.getDepartmentById = {
        ...state.getDepartmentById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETDEPARTMENTBYID.rejected, (state, action) => {
      state.getDepartmentById = {
        ...state.getDepartmentById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getDepartmentByIdAction = {
    GETDEPARTMENTBYID,
};

export { getDepartmentByIdAction };
export default getDepartmentByIdSlice.reducer;
export const {setInitialStateOfgetDepartmentById} = getDepartmentByIdSlice.actions
