
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../../constants";
import { fetchData } from "../../../../helpers";

// ADDHOMESECTIONPOST
// ADDHOMESECTIONPOST


const ADDHOMESECTIONPOST= createAsyncThunk(
  "addHomeSectionPost/addHomeSectionPost",
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
const addHomeSectionPostSlice = createSlice({
  name: "addHomeSectionPostSlice",
  initialState: {
    addHomeSectionPost: {
      ...defaultState.List,
      loading: false, 
      error: false, 
    },
  },
  reducers: {
    setInitialStateOfaddHomeSectionPost: (state) => {
        state.addHomeSectionPost.loading = false
        state.addHomeSectionPost.error = false
        state.addHomeSectionPost.data = []
        state.addHomeSectionPost.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(ADDHOMESECTIONPOST.fulfilled, (state, action) => {
      state.addHomeSectionPost = {
        ...state.addHomeSectionPost,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDHOMESECTIONPOST.pending, (state, action) => {
      state.addHomeSectionPost = {
        ...state.addHomeSectionPost,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(ADDHOMESECTIONPOST.rejected, (state, action) => {
      state.addHomeSectionPost = {
        ...state.addHomeSectionPost,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});

const addHomeSectionPostAction = {
    ADDHOMESECTIONPOST,
};

export { addHomeSectionPostAction };
export default addHomeSectionPostSlice.reducer;
export const {setInitialStateOfaddHomeSectionPost} = addHomeSectionPostSlice.actions
