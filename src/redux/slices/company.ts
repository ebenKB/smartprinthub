import { createSlice } from "@reduxjs/toolkit";

export const companySlice = createSlice({
  name: "company",
  initialState: {
    companies: [],
    userPreferredCompanies: [],
    selectedCompany: {
      id: "",
      jobTypes: null,
    }
  },

  reducers: {
    saveComapnies: (state, action) => {
      state.companies = action.payload
    },

    getCompanyByID: (state, action) => {
      console.log("This is the ID", action.payload);
    },

    setCompanyJobTypes: (state, action) => {
      state.selectedCompany = action.payload === null ? {} : action.payload;
    },
    
    clearSelectedCompany: (state) => {
      state.selectedCompany = {id: "", jobTypes: null}
    },

    removeSingleCompany: (state, action) => {}
  }
})

export const { saveComapnies, setCompanyJobTypes, clearSelectedCompany } = companySlice.actions;
export const selectCompanies = (state: any) => state.company.companies;
export const selectCompanyJobTypes = (state: any) => state.company.selectedCompany?.jobTypes;
export default companySlice.reducer;
