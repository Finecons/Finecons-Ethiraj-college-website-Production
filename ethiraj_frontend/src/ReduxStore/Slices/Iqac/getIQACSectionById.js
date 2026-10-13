
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getIQACSectionById
// GETIQACSECTIONBYID


const GETIQACSECTIONBYID= createAsyncThunk(
  "getIQACSectionById/getIQACSectionById",
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
const getIQACSectionByIdSlice = createSlice({
  name: "getIQACSectionByIdSlice",
  initialState: {
    getIQACSectionById: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetIQACSectionById: (state) => {
        state.getIQACSectionById.loading = false
        state.getIQACSectionById.error = false
        state.getIQACSectionById.data = []
        state.getIQACSectionById.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETIQACSECTIONBYID.fulfilled, (state, action) => {
      state.getIQACSectionById = {
        ...state.getIQACSectionById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETIQACSECTIONBYID.pending, (state, action) => {
      state.getIQACSectionById = {
        ...state.getIQACSectionById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETIQACSECTIONBYID.rejected, (state, action) => {
      state.getIQACSectionById = {
        ...state.getIQACSectionById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getIQACSectionByIdAction = {
    GETIQACSECTIONBYID,
};

export { getIQACSectionByIdAction };
export default getIQACSectionByIdSlice.reducer;
export const {setInitialStateOfgetIQACSectionById} = getIQACSectionByIdSlice.actions
