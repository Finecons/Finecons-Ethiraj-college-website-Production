



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const ADDPROGRAMMELEVEL= createAsyncThunk(
  "addProgrammeLevel/addProgrammeLevel",
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
const addProgrammeLevelSlice = createSlice({
  name: "addProgrammeLevelSlice",
  initialState: {
    addProgrammeLevel: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfaddProgrammeLevel: (state) => {
        state.addProgrammeLevel.loading = false
        state.addProgrammeLevel.error = false
        state.addProgrammeLevel.data = []
        state.addProgrammeLevel.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(ADDPROGRAMMELEVEL.fulfilled, (state, action) => {
      state.addProgrammeLevel = {
        ...state.addProgrammeLevel,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDPROGRAMMELEVEL.pending, (state, action) => {
      state.addProgrammeLevel = {
        ...state.addProgrammeLevel,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDPROGRAMMELEVEL.rejected, (state, action) => {
      state.addProgrammeLevel = {
        ...state.addProgrammeLevel,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addProgrammeLevelAction = {
    ADDPROGRAMMELEVEL,
};

export { addProgrammeLevelAction };
export default addProgrammeLevelSlice.reducer;
export const {setInitialStateOfaddProgrammeLevel} = addProgrammeLevelSlice.actions
