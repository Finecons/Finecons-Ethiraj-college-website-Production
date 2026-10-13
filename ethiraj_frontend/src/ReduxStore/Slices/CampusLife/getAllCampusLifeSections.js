
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getAllCampusLifeSections
// getAllCampusLifeSections


const GETALLCAMPUSLIFESECTIONS= createAsyncThunk(
  "getAllCampusLifeSections/getAllCampusLifeSections",
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
const getAllCampusLifeSectionsSlice = createSlice({
  name: "getAllCampusLifeSectionsSlice",
  initialState: {
    getAllCampusLifeSections: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllCampusLifeSections: (state) => {
        state.getAllCampusLifeSections.loading = false
        state.getAllCampusLifeSections.error = false
        state.getAllCampusLifeSections.data = []
        state.getAllCampusLifeSections.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLCAMPUSLIFESECTIONS.fulfilled, (state, action) => {
      state.getAllCampusLifeSections = {
        ...state.getAllCampusLifeSections,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLCAMPUSLIFESECTIONS.pending, (state, action) => {
      state.getAllCampusLifeSections = {
        ...state.getAllCampusLifeSections,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLCAMPUSLIFESECTIONS.rejected, (state, action) => {
      state.getAllCampusLifeSections = {
        ...state.getAllCampusLifeSections,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllCampusLifeSectionsAction = {
    GETALLCAMPUSLIFESECTIONS,
};

export { getAllCampusLifeSectionsAction };
export default getAllCampusLifeSectionsSlice.reducer;
export const {setInitialStateOfgetAllCampusLifeSections} = getAllCampusLifeSectionsSlice.actions
