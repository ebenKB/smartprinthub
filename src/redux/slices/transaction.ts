import { createSlice } from "@reduxjs/toolkit";

// type transactionSlice {
//   data: []
// }

// type TransactionState = {
//   data: []
// }

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    data: [],
  },

  reducers: {
    saveTransactions: (state, action) => {
      state.data = action.payload
    },
  }
})

export const { saveTransactions } = transactionSlice.actions;
export const selectTransactions = (state: any) => state.transaction.data;
export default transactionSlice.reducer;
