
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// postContactUsForm
// postContactUsForm


const POSTCONTACTUSFORM= createAsyncThunk(
  "postContactUsForm/postContactUsForm",
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
const postContactUsFormSlice = createSlice({
  name: "postContactUsFormSlice",
  initialState: {
    postContactUsForm: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfpostContactUsForm: (state) => {
        state.postContactUsForm.loading = false
        state.postContactUsForm.error = false
        state.postContactUsForm.data = []
        state.postContactUsForm.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(POSTCONTACTUSFORM.fulfilled, (state, action) => {
      state.postContactUsForm = {
        ...state.postContactUsForm,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(POSTCONTACTUSFORM.pending, (state, action) => {
      state.postContactUsForm = {
        ...state.postContactUsForm,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(POSTCONTACTUSFORM.rejected, (state, action) => {
      state.postContactUsForm = {
        ...state.postContactUsForm,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const postContactUsFormAction = {
    POSTCONTACTUSFORM,
};

export { postContactUsFormAction };
export default postContactUsFormSlice.reducer;
export const {setInitialStateOfpostContactUsForm} = postContactUsFormSlice.actions
