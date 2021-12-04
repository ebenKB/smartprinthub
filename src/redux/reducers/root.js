import { combineReducers } from 'redux';
import userReducer from '../slices/user';
import jobReducer from '../slices/job';
import jobDraftsReducer from 'redux/slices/jobDrafts';
import failedJobReducer from "redux/slices/failedJobs";
import appReducer from '../slices/app';
import companyReducer from "../slices/company";
import transactionReducer from "../slices/transaction";

const reducers = combineReducers({
  user: userReducer,
  job: jobReducer,
  app: appReducer,
  company: companyReducer,
  jobDrafts: jobDraftsReducer,
  failedJobs: failedJobReducer,
  transaction: transactionReducer,
});

export default reducers;
