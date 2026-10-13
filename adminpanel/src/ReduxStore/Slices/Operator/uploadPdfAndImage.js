/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultReject, defaultState } from "../../../constants";
import { fetchData } from "../../../helpers";
 
// uploadPdfAndImage
// UPLOADPDFANDIMAGE
const UPLOADPDFANDIMAGE= createAsyncThunk(
  "uploadPdfAndImage/uploadPdfAndImage",
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
const uploadPdfAndImageSlice = createSlice({
  name: "uploadPdfAndImageSlice",
  initialState: {
    uploadPdfAndImage: {
      ...defaultState.List,
      loading: false,
      error: false,
    },
  },
  reducers: {
    setInitialStateOfuploadPdfAndImage: (state) => {
        state.uploadPdfAndImage.loading = false
        state.uploadPdfAndImage.error = false
        state.uploadPdfAndImage.data = []
        state.uploadPdfAndImage.message = ''
      }
  },
  extraReducers: (builder) => {
    builder.addCase(UPLOADPDFANDIMAGE.fulfilled, (state, action) => {
      state.uploadPdfAndImage = {
        ...state.uploadPdfAndImage,
        loading: false,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPLOADPDFANDIMAGE.pending, (state, action) => {
      state.uploadPdfAndImage = {
        ...state.uploadPdfAndImage,
        loading: true,
        error: false,
        ...action.payload,
      };
    });
    builder.addCase(UPLOADPDFANDIMAGE.rejected, (state, action) => {
      state.uploadPdfAndImage = {
        ...state.uploadPdfAndImage,
        loading: false,
        error: true,
        ...action.payload,
      };
    });
  },
});
 
const uploadPdfAndImageAction = {
    UPLOADPDFANDIMAGE,
};
 
export { uploadPdfAndImageAction };
export default uploadPdfAndImageSlice.reducer;
export const {setInitialStateOfuploadPdfAndImage} = uploadPdfAndImageSlice.actions
 