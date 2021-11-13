import { combineReducers } from 'redux';
import userReducer from '../slices/user';
import jobReducer from '../slices/job';
import jobDraftsReducer from 'redux/slices/jobDrafts';
import appReducer from '../slices/app';
import companyReducer from "../slices/company";

const reducers = combineReducers({
  user: userReducer,
  job: jobReducer,
  app: appReducer,
  company: companyReducer,
  jobDrafts: jobDraftsReducer,
});

export default reducers;
