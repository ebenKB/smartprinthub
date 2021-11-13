import { DefaultSize } from "./defaultSize.type";
import { PaperType } from "./paperType.type";

export type JobType = {
  title: string,
  defaultSizes:  DefaultSize,
  paperType: PaperType,
  unitCost: number,
  slug: string,
  companyID: string,
  _id: string,
}