import Axios from "axios";
import history from "utils/history";

const BASE_URL = "https://warm-lowlands-46784.herokuapp.com"

const AxiosInstance = Axios.create({
  baseURL: `${BASE_URL}`
});

// Add axios interceptor to catch all 401 unAuth Errors
AxiosInstance.interceptors.response.use((response) => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    console.log("UnAuth", error)
    history.push(`/signin`);
  }
  return Promise.reject(error);
})

export default AxiosInstance;
