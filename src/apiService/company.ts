import Axios from "../utils/axios";

export const getAllCompanies = async (onProgessCallback?: () => void) => {
  const response = await Axios.get(`/v1/company`, {
    onDownloadProgress: onProgessCallback,
  });
  return response;
}

export const getCompanyDetails = async(companyID: string, onProgessCallback?:any) => {
  const response = await Axios.get(`/v1/company/${companyID}`, {
    onDownloadProgress: onProgessCallback
  });
  return response;
}
