/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getAllMeritListSections
// getAllMeritListSections

const GETALLMERITLISTSECTIONS = createAsyncThunk(
  "getAllMeritListSections/getAllMeritListSections",
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

// getAllMeritListSectionsSlice
const getAllMeritListSectionsSlice = createSlice({
  name: "getAllMeritListSectionsSlice",
  initialState: {
    getAllMeritListSections: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfgetAllMeritListSections: (state) => {
      state.getAllMeritListSections.loading = false;
      state.getAllMeritListSections.error = false;
      state.getAllMeritListSections.data = [];
      state.getAllMeritListSections.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLMERITLISTSECTIONS.fulfilled, (state, action) => {
      state.getAllMeritListSections = {
        ...state.getAllMeritListSections,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLMERITLISTSECTIONS.pending, (state, action) => {
      state.getAllMeritListSections = {
        ...state.getAllMeritListSections,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLMERITLISTSECTIONS.rejected, (state, action) => {
      state.getAllMeritListSections = {
        ...state.getAllMeritListSections,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllMeritListSectionsAction = {
  GETALLMERITLISTSECTIONS,
};

export { getAllMeritListSectionsAction };
export default getAllMeritListSectionsSlice.reducer;
export const { setInitialStateOfgetAllMeritListSections } =
  getAllMeritListSectionsSlice.actions;
