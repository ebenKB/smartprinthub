import { createSlice } from "@reduxjs/toolkit";

export const companySlice = createSlice({
  name: "company",
  initialState: {
    companies: []
  },
  reducers: {
    saveComapnies: (state, action) => {
      state.companies = action.payload
    },

    getCompanyByID: (state, action) => {
      console.log("This is the ID", action.payload);
    }
  }
})

export const { saveComapnies } = companySlice.actions;
export const selectCompanies = (state: any) => state.company.companies;
export default companySlice.reducer;