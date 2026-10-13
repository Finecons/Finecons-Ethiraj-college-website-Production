/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getAllResearchSections
// GETALLRESEARCHSECTIONS


const GETALLRESEARCHSECTIONS= createAsyncThunk(
  "getAllResearchSections/getAllResearchSections",
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

// getAllResearchSectionsSlice
const getAllResearchSectionsSlice = createSlice({
  name: "getAllResearchSectionsSlice",
  initialState: {
    getAllResearchSections: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAllResearchSections: (state) => {
        state.getAllResearchSections.loading = false
        state.getAllResearchSections.error = false
        state.getAllResearchSections.data = []
        state.getAllResearchSections.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETALLRESEARCHSECTIONS.fulfilled, (state, action) => {
      state.getAllResearchSections = {
        ...state.getAllResearchSections,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLRESEARCHSECTIONS.pending, (state, action) => {
      state.getAllResearchSections = {
        ...state.getAllResearchSections,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETALLRESEARCHSECTIONS.rejected, (state, action) => {
      state.getAllResearchSections = {
        ...state.getAllResearchSections,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAllResearchSectionsAction = {
    GETALLRESEARCHSECTIONS,
};

export { getAllResearchSectionsAction };
export default getAllResearchSectionsSlice.reducer;
export const {setInitialStateOfgetAllResearchSections} = getAllResearchSectionsSlice.actions
