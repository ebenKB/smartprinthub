import { combineReducers } from 'redux';
import userReducer from '../slices/user';
import jobReducer from '../slices/job';
import appReducer from '../slices/app';

const reducers = combineReducers({
  user: userReducer,
  job: jobReducer,
  app: appReducer,
});

export default reducers;
