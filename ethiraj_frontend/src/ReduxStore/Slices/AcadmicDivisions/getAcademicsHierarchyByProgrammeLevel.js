
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// getAcademicsHierarchyByProgrammeLevel
// getAcademicsHierarchyByProgrammeLevel


const GETACADEMICSHIERARCHYBYPROGRAMMELEVEL= createAsyncThunk(
  "getAcademicsHierarchyByProgrammeLevel/getAcademicsHierarchyByProgrammeLevel",
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
const getAcademicsHierarchyByProgrammeLevelSlice = createSlice({
  name: "getAcademicsHierarchyByProgrammeLevelSlice",
  initialState: {
    getAcademicsHierarchyByProgrammeLevel: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfgetAcademicsHierarchyByProgrammeLevel: (state) => {
        state.getAcademicsHierarchyByProgrammeLevel.loading = false
        state.getAcademicsHierarchyByProgrammeLevel.error = false
        state.getAcademicsHierarchyByProgrammeLevel.data = []
        state.getAcademicsHierarchyByProgrammeLevel.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(GETACADEMICSHIERARCHYBYPROGRAMMELEVEL.fulfilled, (state, action) => {
      state.getAcademicsHierarchyByProgrammeLevel = {
        ...state.getAcademicsHierarchyByProgrammeLevel,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETACADEMICSHIERARCHYBYPROGRAMMELEVEL.pending, (state, action) => {
      state.getAcademicsHierarchyByProgrammeLevel = {
        ...state.getAcademicsHierarchyByProgrammeLevel,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETACADEMICSHIERARCHYBYPROGRAMMELEVEL.rejected, (state, action) => {
      state.getAcademicsHierarchyByProgrammeLevel = {
        ...state.getAcademicsHierarchyByProgrammeLevel,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const getAcademicsHierarchyByProgrammeLevelAction = {
    GETACADEMICSHIERARCHYBYPROGRAMMELEVEL,
};

export { getAcademicsHierarchyByProgrammeLevelAction };
export default getAcademicsHierarchyByProgrammeLevelSlice.reducer;
export const {setInitialStateOfgetAcademicsHierarchyByProgrammeLevel} = getAcademicsHierarchyByProgrammeLevelSlice.actions
