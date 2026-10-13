


/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// GETHOMESECTIONBYID
// GETHOMESECTIONBYID


const GETHOMESECTIONBYID= createAsyncThunk(
  "getHomeSectionById/getHomeSectionById",
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
const getHomeSectionByIdSlice = createSlice({
  name: "getHomeSectionByIdSlice",
  initialState: {
    getHomeSectionById: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetHomeSectionById: (state) => {
        state.getHomeSectionById.loading = false
        state.getHomeSectionById.error = false
        state.getHomeSectionById.data = []
        state.getHomeSectionById.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETHOMESECTIONBYID.fulfilled, (state, action) => {
      state.getHomeSectionById = {
        ...state.getHomeSectionById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETHOMESECTIONBYID.pending, (state, action) => {
      state.getHomeSectionById = {
        ...state.getHomeSectionById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETHOMESECTIONBYID.rejected, (state, action) => {
      state.getHomeSectionById = {
        ...state.getHomeSectionById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getHomeSectionByIdAction = {
    GETHOMESECTIONBYID,
};

export { getHomeSectionByIdAction };
export default getHomeSectionByIdSlice.reducer;
export const {setInitialStateOfgetHomeSectionById} = getHomeSectionByIdSlice.actions
