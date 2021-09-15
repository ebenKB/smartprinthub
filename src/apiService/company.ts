import Axios from "../utils/axios";

export const getAllCompanies = async () => {
  const response = await Axios.get(`/v1/company`);
  return response;
}

export const getCompanyDetails = async(companyID: string) => {
  const response = await Axios.get(`/v1/company/${companyID}`);
  return response;
}
