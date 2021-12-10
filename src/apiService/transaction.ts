import Axios from "utils/axios";
import { Transaction } from "types/transaction.type";

export const createTransaction = async (transaction: { transaction: Transaction}) => {
  const response = await Axios.post(`/v1/transaction`, transaction);
  return response;
}


export const getAllTransactions = async (onProgessCallback: (val:any) => void) => {
  const response = await Axios.get(`/v1/transaction`, {
    onDownloadProgress: onProgessCallback
  });
  return response;
}
