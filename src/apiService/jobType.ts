import Axios from "axios";

export const getAllJobTypes = async () => {
  const response = await Axios.get(``);
  return response;
}

export const loadCompanyJobTypes = async () => {
  const response = await Axios.get(`/v1/company-job-types`)
  return response;
}
