import { PaperSizeType } from "enums/PaperSizeType.enum";
import { Job } from "types/job.type";
import { computeJobCost } from "utils/job";
import FileReader from "utils/FileReader";
import { createJob } from "apiService/job";

export const createNewJob = async(job: Job, transactionID: string) => {
  const reader = new FileReader()
  const formData = new FormData();

  formData.append("file", await reader.getBlobFromDataURL(job.file));
  formData.append("title", job.title);
  formData.append("comment", job.comment);
  formData.append("transactionFee", String(job.transactionFee));
  formData.append("sweepAmount", String(job.sweepAmount));
  formData.append("chargeSplitAmount", String(job.chargeSplitAmount));
  formData.append("costPayable", String(job.costPayable));
  formData.append("actualCost", String(job.actualCost));
  formData.append("jobType", job.selectedJobType._id);
  formData.append("unit", job.unit);
  formData.append("quantity", String(job.quantity));
  formData.append("papperType[name]", job.selectedJobType.paperType.name);
  formData.append("papperType[commonName]", job.selectedJobType.paperType.commonName);
  formData.append("companyID", job.company._id);
  formData.append("cost", String(job.costPayable));
  formData.append("transactionID", transactionID);

  // append dimension for custom sizes
  if (job.paperSizeType === PaperSizeType.CUSTOM) {
    formData.append("height", String(job.height));
    formData.append("width", String(job.width));
  }

  // apend dimension for default size
  if (job.paperSizeType === PaperSizeType.DEFAULT) {
    formData.append("height", String(job.defaultSize.height));
    formData.append("width", String(job.defaultSize.width));
  }

  try {
    const response = await createJob(formData);
    return response;
  } catch (error) {
    return {
      error: error.response,
      failedJob: job,
    };
  }
}

export const createMultipleJobs = async (jobs:Job[], transactionID: string) => {
  let promises = [];
  for (const job of jobs) {
    const promise = await createNewJob(job, transactionID);
    promises.push(promise)
  }

  const response = await Promise.all(promises);
  return response;
}

export const retryFailedJob = async (job: Job, transactionID:string, callback: (res:any) => void) => {
 let counter =0;
 const MAX_TRIES = 10;
 const TIMER = 1500 * 3;
 let status = false;
 let response:any;

 const intervalID = setInterval(async () => {
  counter++;
  if (counter <= MAX_TRIES && !status) {
    response = await createNewJob(job, transactionID);
    // exit when job is created successfully
    if (response.status === 200 || response.status === 201) {
      status = true;
      clearInterval(intervalID);
      callback(response);
    }
  } else { // exit when all attempts fail
    clearInterval(intervalID);
    callback(response);
  }
 }, TIMER);
}

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
  if (!job.company) {
    return false;
  }
  
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

export const computeAllJobCosts = (jobs:Job[]) => {
  return jobs.map((job:Job) => ({...job, totalCost: computeJobCost(job)}))
}
