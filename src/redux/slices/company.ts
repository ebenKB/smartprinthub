import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

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
export const selectCompanies = (state: RootState) => state.company.companies;
export const selectCompanyJobTypes = (state: RootState) => state.company.selectedCompany?.jobTypes;
export const selectUserCompanies = (state: RootState) => state.company.userPreferredCompanies;
export default companySlice.reducer;
