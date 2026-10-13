import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  TableId: null, // Default value for customerId
};

const TableIdGetSlice = createSlice({
  name: 'Table',
  initialState,
  reducers: {
    setTableGetId: (state, action) => {
      state.TableId = action.payload; // Set the customerId
    },
    clearTableGetId: (state) => {
      state.TableId = null; // Clear the customerId
    },
  },
});

export const { setTableGetId, clearTableGetId } = TableIdGetSlice.actions;

export default TableIdGetSlice.reducer;
