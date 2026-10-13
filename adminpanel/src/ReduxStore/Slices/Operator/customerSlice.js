import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customerId: null, // Default value for customerId
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomerId: (state, action) => {
      state.customerId = action.payload; // Set the customerId
    },
    clearCustomerId: (state) => {
      state.customerId = null; // Clear the customerId
    },
  },
});

export const { setCustomerId, clearCustomerId } = customerSlice.actions;

export default customerSlice.reducer;
