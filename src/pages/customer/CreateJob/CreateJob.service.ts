import { PaperSizeType } from "enums/PaperSizeType.enum";
import { Job } from "types/job.type";
import { computeJobCost } from "utils/job";

export const createJob = () => {}

export const jobHasFile = (job:{file: string}) => {
  if (!job || !job?.file) {
    return false;
  }

  return true;
}

export const saveJobProgress  = (callback: () => void) => {
  try {
    const TIMER = 30000;
    const intervalID = setInterval(() => {
      if (callback) {
        callback();
      }
    }, TIMER)
  
    return intervalID;
  } catch (error) {
    return null;
  }
}

export const formatCompanyJobTypes = (jobTypes: {}[]) => {
  if (jobTypes) {
    return jobTypes.map((type:any) => ({
      key: type._id,
      text: `${type.paperType.name.toUpperCase()} - ${type.paperType.commonName}`,
      value: type
    }))
  }
  return [];
}

export const isJobValid = (job:Job) => {
  if (!job.file) return false;

  if (!job.paperSizeType) return false;
  
  if (!job.selectedJobType) {
    return false
  }

  if (job.paperSizeType === PaperSizeType.DEFAULT) {
    if (!job.defaultSize) {
      return false;
    }
  }

  if(job.paperSizeType === PaperSizeType.CUSTOM) {
    if (!job.width || !job.height) {
      return false;
    }
  }
  return true;
}

export const computeJobCostForDefaultSize = (job:Job) => {
  return 100;
}

export const computeAllJobCosts = (jobs:Job[]) => {
  return jobs.map((job:Job) => ({...job, totalCost: computeJobCost(job)}))
}