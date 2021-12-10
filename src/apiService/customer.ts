import Axios from "utils/axios";

export const addUserCompany = async (data: object) => {
  const response = await Axios.put(`/v1/customer-account`, data);
  return response;
}

export const addDefaultCompany = async (data: object) => {
  const response = await Axios.put(`/v1/customer-account`, data);
  return response;
}

export const clearDefaultCompany = async () => {
  const response = await Axios.put(`/v1/customer-account`, {
    defaultCompany: null
  });
  return response;
}

export const getpreferredCompanies = async (onProgessCallback: () => void) => {
  const response = await Axios.get(`/v1/customer-account/company/preferred-companies`, {onDownloadProgress: onProgessCallback});
  return response;
}


export const removeCustomerCompanies = async (companyIDs: {companyIDs: string[]}) => {
  const response = await Axios.post(`/v1/customer-account/company/preferred-companies`, companyIDs);
  return response;
}
