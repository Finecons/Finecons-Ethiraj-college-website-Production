



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// GETABOUTUSSECTIONBYID
// GETABOUTUSSECTIONBYID


const GETABOUTUSSECTIONBYID= createAsyncThunk(
  "getAboutUsSectionById/getAboutUsSectionById",
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
const getAboutUsSectionByIdSlice = createSlice({
  name: "getAboutUsSectionByIdSlice",
  initialState: {
    getAboutUsSectionById: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAboutUsSectionById: (state) => {
        state.getAboutUsSectionById.loading = false
        state.getAboutUsSectionById.error = false
        state.getAboutUsSectionById.data = []
        state.getAboutUsSectionById.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETABOUTUSSECTIONBYID.fulfilled, (state, action) => {
      state.getAboutUsSectionById = {
        ...state.getAboutUsSectionById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETABOUTUSSECTIONBYID.pending, (state, action) => {
      state.getAboutUsSectionById = {
        ...state.getAboutUsSectionById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETABOUTUSSECTIONBYID.rejected, (state, action) => {
      state.getAboutUsSectionById = {
        ...state.getAboutUsSectionById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAboutUsSectionByIdAction = {
    GETABOUTUSSECTIONBYID,
};

export { getAboutUsSectionByIdAction };
export default getAboutUsSectionByIdSlice.reducer;
export const {setInitialStateOfgetAboutUsSectionById} = getAboutUsSectionByIdSlice.actions
