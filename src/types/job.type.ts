import { DefaultSize } from "./defaultSize.type";
import { JobType } from "./jobType.type";
import { PaperType } from "./paperType.type";

export type Job = {
  title: string,
  paperSizeType: number,
  comment: string,
  width: string | number,
  height: string | number,
  unit: string,
  paperType:PaperType,
  selectedJobType: JobType,
  quantity: number,
  defaultSize: DefaultSize,
  file: string,
  unitCost: number,
  costPayable?: number,
  sweepAmount?: number,
  transactionFee?:number,
  chargeSplitAmount?:number,
  actualCost?: number,
  company: {_id: string,}
}
