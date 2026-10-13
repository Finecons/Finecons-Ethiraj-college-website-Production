



/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
// customerRegister
// CUSTOMERREGISTER
const ADDACADEMIC= createAsyncThunk(
  "addAcademic/addAcademic",
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
const addAcademicSlice = createSlice({
  name: "addAcademicSlice",
  initialState: {
    addAcademic: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfaddAcademic: (state) => {
        state.addAcademic.loading = false
        state.addAcademic.error = false
        state.addAcademic.data = []
        state.addAcademic.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(ADDACADEMIC.fulfilled, (state, action) => {
      state.addAcademic = {
        ...state.addAcademic,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDACADEMIC.pending, (state, action) => {
      state.addAcademic = {
        ...state.addAcademic,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDACADEMIC.rejected, (state, action) => {
      state.addAcademic = {
        ...state.addAcademic,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addAcademicAction = {
    ADDACADEMIC,
};

export { addAcademicAction };
export default addAcademicSlice.reducer;
export const {setInitialStateOfaddAcademic} = addAcademicSlice.actions
