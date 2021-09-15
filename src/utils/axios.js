import Axios from "axios";
import history from "utils/history";

const BASE_URL = "https://99d1-154-160-5-14.ngrok.io"

const AxiosInstance = Axios.create({
  baseURL: `${BASE_URL}`
});

// Add axios interceptor to catch all 401 unAuth Errors
AxiosInstance.interceptors.response.use((response) => {
  return response;
}, error => {
  console.log("Axios error", error)
  if (error.response && error.response.status === 401) {
    history.push(`/signin`);
  }
  // return Promise.reject(error);
  return;
})

export default AxiosInstance;
