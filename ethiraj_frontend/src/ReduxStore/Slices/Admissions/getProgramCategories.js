/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";

// Get Undergraduate Aided Programs
const GETUNDERGRADUATEAIDEDPROGRAMS = createAsyncThunk(
  "programCategories/getUndergraduateAidedPrograms",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        payload?.data || {},
        payload?.method || "GET",
        "getUndergraduateAidedPrograms"
      );
      return {
        ...defaultState.List,
        message: data?.data?.Message,
        data: data?.data?.data || [],
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

// Get Undergraduate Self-Supporting Programs
const GETUNDERGRADUATESELFSUPPORTINGPROGRAMS = createAsyncThunk(
  "programCategories/getUndergraduateSelfSupportingPrograms",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        payload?.data || {},
        payload?.method || "GET",
        "getUndergraduateSelfSupportingPrograms"
      );
      return {
        ...defaultState.List,
        message: data?.data?.Message,
        data: data?.data?.data || [],
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

// Get Postgraduate Aided Programs
const GETPOSTGRADUATEAIDEDPROGRAMS = createAsyncThunk(
  "programCategories/getPostgraduateAidedPrograms",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        payload?.data || {},
        payload?.method || "GET",
        "getPostgraduateAidedPrograms"
      );
      return {
        ...defaultState.List,
        message: data?.data?.Message,
        data: data?.data?.data || [],
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

// Get Postgraduate Self-Supporting Programs
const GETPOSTGRADUATESELFSUPPORTINGPROGRAMS = createAsyncThunk(
  "programCategories/getPostgraduateSelfSupportingPrograms",
  async (payload = {}, { rejectWithValue }) => {
    try {
      const data = await fetchData(
        payload?.data || {},
        payload?.method || "GET",
        "getPostgraduateSelfSupportingPrograms"
      );
      return {
        ...defaultState.List,
        message: data?.data?.Message,
        data: data?.data?.data || [],
      };
    } catch (error) {
      return rejectWithValue({
        ...defaultReject.List,
        message: error.message,
      });
    }
  }
);

// Program Categories Slice
const programCategoriesSlice = createSlice({
  name: "programCategoriesSlice",
  initialState: {
    undergraduateAided: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
    undergraduateSelfSupporting: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
    postgraduateAided: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
    postgraduateSelfSupporting: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfProgramCategories: (state) => {
      state.undergraduateAided = {
        ...defaultState.List,
        loading: false,
        error: false,
      };
      state.undergraduateSelfSupporting = {
        ...defaultState.List,
        loading: false,
        error: false,
      };
      state.postgraduateAided = {
        ...defaultState.List,
        loading: false,
        error: false,
      };
      state.postgraduateSelfSupporting = {
        ...defaultState.List,
        loading: false,
        error: false,
      };
    },
  },
  extraReducers: (builder) => {
    // Undergraduate Aided
    builder.addCase(GETUNDERGRADUATEAIDEDPROGRAMS.fulfilled, (state, action) => {
      state.undergraduateAided = {
        ...state.undergraduateAided,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETUNDERGRADUATEAIDEDPROGRAMS.pending, (state, action) => {
      state.undergraduateAided = {
        ...state.undergraduateAided,
        loading: true,
        error: false,
      };
    });
    builder.addCase(
      GETUNDERGRADUATEAIDEDPROGRAMS.rejected,
      (state, action) => {
        state.undergraduateAided = {
          ...state.undergraduateAided,
          loading: false,
          error: true,
          ...action.payload,
        };
      }
    );

    // Undergraduate Self-Supporting
    builder.addCase(
      GETUNDERGRADUATESELFSUPPORTINGPROGRAMS.fulfilled,
      (state, action) => {
        state.undergraduateSelfSupporting = {
          ...state.undergraduateSelfSupporting,
          loading: false,
          error: false,
          ...action.payload,
        };
      }
    );
    builder.addCase(
      GETUNDERGRADUATESELFSUPPORTINGPROGRAMS.pending,
      (state, action) => {
        state.undergraduateSelfSupporting = {
          ...state.undergraduateSelfSupporting,
          loading: true,
          error: false,
        };
      }
    );
    builder.addCase(
      GETUNDERGRADUATESELFSUPPORTINGPROGRAMS.rejected,
      (state, action) => {
        state.undergraduateSelfSupporting = {
          ...state.undergraduateSelfSupporting,
          loading: false,
          error: true,
          ...action.payload,
        };
      }
    );

    // Postgraduate Aided
    builder.addCase(GETPOSTGRADUATEAIDEDPROGRAMS.fulfilled, (state, action) => {
      state.postgraduateAided = {
        ...state.postgraduateAided,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(GETPOSTGRADUATEAIDEDPROGRAMS.pending, (state, action) => {
      state.postgraduateAided = {
        ...state.postgraduateAided,
        loading: true,
        error: false,
      };
    });
    builder.addCase(GETPOSTGRADUATEAIDEDPROGRAMS.rejected, (state, action) => {
      state.postgraduateAided = {
        ...state.postgraduateAided,
        loading: false,
        error: true,
        ...action.payload,
      };
    });

    // Postgraduate Self-Supporting
    builder.addCase(
      GETPOSTGRADUATESELFSUPPORTINGPROGRAMS.fulfilled,
      (state, action) => {
        state.postgraduateSelfSupporting = {
          ...state.postgraduateSelfSupporting,
          loading: false,
          error: false,
          ...action.payload,
        };
      }
    );
    builder.addCase(
      GETPOSTGRADUATESELFSUPPORTINGPROGRAMS.pending,
      (state, action) => {
        state.postgraduateSelfSupporting = {
          ...state.postgraduateSelfSupporting,
          loading: true,
          error: false,
        };
      }
    );
    builder.addCase(
      GETPOSTGRADUATESELFSUPPORTINGPROGRAMS.rejected,
      (state, action) => {
        state.postgraduateSelfSupporting = {
          ...state.postgraduateSelfSupporting,
          loading: false,
          error: true,
          ...action.payload,
        };
      }
    );
  },
});

const programCategoriesActions = {
  GETUNDERGRADUATEAIDEDPROGRAMS,
  GETUNDERGRADUATESELFSUPPORTINGPROGRAMS,
  GETPOSTGRADUATEAIDEDPROGRAMS,
  GETPOSTGRADUATESELFSUPPORTINGPROGRAMS,
};

export { programCategoriesActions };
export default programCategoriesSlice.reducer;
export const { setInitialStateOfProgramCategories } =
  programCategoriesSlice.actions;
