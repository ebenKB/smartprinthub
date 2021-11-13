import Axios from "../utils/axios";

export const getAllJobTypes = async () => {
  const response = await Axios.get(``);
  return response;
}

export const loadAllCompanyJobTypes = async (companyID: string) => {
  const response = await Axios.get(`/v1/company-job-types/company/${companyID}`)
  return response;
}
