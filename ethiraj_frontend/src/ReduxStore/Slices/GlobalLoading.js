import { createSlice } from "@reduxjs/toolkit";

const globalLoadingSlice = createSlice({
  name: "globalLoading",
  initialState: {
    isLoading: false,
    loadingCount: 0,
  },
  reducers: {
    startLoading: (state) => {
      state.loadingCount += 1;
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.loadingCount = Math.max(0, state.loadingCount - 1);
      state.isLoading = state.loadingCount > 0;
    },
    resetLoading: (state) => {
      state.isLoading = false;
      state.loadingCount = 0;
    },
  },
});

export const { startLoading, stopLoading, resetLoading } =
  globalLoadingSlice.actions;
export default globalLoadingSlice.reducer;
