import { Job } from "types/job.type";
import Axios  from "../utils/axios";

export const getAllJobs  = async () => {
  const response = await Axios.get(`/v1/job/user`);
  return response;
}

export const getJobEstimate = async (job:any) => {
  const response = await Axios.post(`/v1/job/cost`, job);
  return response;
}

export const createJob = async (job: any) => {
  const response = await Axios.post(`/v1/job`, job);
  console.log("response", response);
  return response;
}
