



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const UPDATEPROGRAMMELEVEL= createAsyncThunk(
  "updateProgrammeLevel/updateProgrammeLevel",
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
const updateProgrammeLevelSlice = createSlice({
  name: "updateProgrammeLevelSlice",
  initialState: {
    updateProgrammeLevel: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfupdateProgrammeLevel: (state) => {
        state.updateProgrammeLevel.loading = false
        state.updateProgrammeLevel.error = false
        state.updateProgrammeLevel.data = []
        state.updateProgrammeLevel.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEPROGRAMMELEVEL.fulfilled, (state, action) => {
      state.updateProgrammeLevel = {
        ...state.updateProgrammeLevel,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEPROGRAMMELEVEL.pending, (state, action) => {
      state.updateProgrammeLevel = {
        ...state.updateProgrammeLevel,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEPROGRAMMELEVEL.rejected, (state, action) => {
      state.updateProgrammeLevel = {
        ...state.updateProgrammeLevel,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateProgrammeLevelAction = {
    UPDATEPROGRAMMELEVEL,
};

export { updateProgrammeLevelAction };
export default updateProgrammeLevelSlice.reducer;
export const {setInitialStateOfupdateProgrammeLevel} = updateProgrammeLevelSlice.actions
