import { PaperSizeType } from "enums/PaperSizeType.enum";
import { Job } from "types/job.type";
import { uuid } from "uuidv4";

export const computeJobCost = (job:Job) => {
  console.log(job);
  return 0; 
}

export const defaultJob = {
  uuid: uuid(),
  totalCost: 0.0,
  actualCost: 0.0,
  payableCost: 0.0,
  discount: 0.0,
  transactionCharges: 0.0,
  title: '',
  width: 1,
  height: 1,
  defaultSize: "",
  quantity: 1,
  comment: '',
  company: null,
  selectedJobType: null,
  paperSizeType: PaperSizeType.DEFAULT,
  unit: null,
  file: null,
  fileDataUrl: "",
  laminated: false,
}