



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const UPDATEACADEMIC= createAsyncThunk(
  "updateAcademic/updateAcademic",
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
const updateAcademicSlice = createSlice({
  name: "updateAcademicSlice",
  initialState: {
    updateAcademic: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfupdateAcademic: (state) => {
        state.updateAcademic.loading = false
        state.updateAcademic.error = false
        state.updateAcademic.data = []
        state.updateAcademic.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(UPDATEACADEMIC.fulfilled, (state, action) => {
      state.updateAcademic = {
        ...state.updateAcademic,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEACADEMIC.pending, (state, action) => {
      state.updateAcademic = {
        ...state.updateAcademic,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPDATEACADEMIC.rejected, (state, action) => {
      state.updateAcademic = {
        ...state.updateAcademic,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const updateAcademicAction = {
    UPDATEACADEMIC,
};

export { updateAcademicAction };
export default updateAcademicSlice.reducer;
export const {setInitialStateOfupdateAcademic} = updateAcademicSlice.actions
