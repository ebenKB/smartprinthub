import Axios  from "../utils/axios";

export const getAllJobs  = async () => {
  const response = await Axios.get(`/v1/job/user`);
  return response;
}
