import Axios from "utils/axios";
import { Transaction } from "types/transaction.type";

export const createTransaction = async (transaction: { transaction: Transaction}) => {
  const response = await Axios.post(`/v1/transaction`, transaction);
  return response;
}


export const getAllTransactions = async () => {
  const response = await Axios.get(`/v1/transaction`, {
    onDownloadProgress: ((ProgressEvent) => {
      console.log("Progress", ProgressEvent.loaded, "Total", ProgressEvent.total)
    })
  });
  return response;
}
