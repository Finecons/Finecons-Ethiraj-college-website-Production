/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// getCampuslifeSectionById
// GETCAMPUSLIFESECTIONBYID


const GETCAMPUSLIFESECTIONBYID = createAsyncThunk(
  "getCampuslifeSectionById/getCampuslifeSectionById",
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

// getCampuslifeSectionByIdSlice
const getCampuslifeSectionByIdSlice = createSlice({
  name: "getCampuslifeSectionByIdSlice",
  initialState: {
    getCampuslifeSectionById: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetCampuslifeSectionById: (state) => {
      state.getCampuslifeSectionById.loading = false;
      state.getCampuslifeSectionById.error = false;
      state.getCampuslifeSectionById.data = [];
      state.getCampuslifeSectionById.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETCAMPUSLIFESECTIONBYID.fulfilled, (state, action) => {
      state.getCampuslifeSectionById = {
        ...state.getCampuslifeSectionById,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETCAMPUSLIFESECTIONBYID.pending, (state, action) => {
      state.getCampuslifeSectionById = {
        ...state.getCampuslifeSectionById,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETCAMPUSLIFESECTIONBYID.rejected, (state, action) => {
      state.getCampuslifeSectionById = {
        ...state.getCampuslifeSectionById,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getCampuslifeSectionByIdAction = {
  GETCAMPUSLIFESECTIONBYID,
};

export { getCampuslifeSectionByIdAction };
export default getCampuslifeSectionByIdSlice.reducer;
export const { setInitialStateOfgetCampuslifeSectionById } =
  getCampuslifeSectionByIdSlice.actions;
