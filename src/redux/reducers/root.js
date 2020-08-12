import { combineReducers } from 'redux';
import userReducer from '../slices/user';
import jobReducer from '../slices/job';

const reducers = combineReducers({
  user: userReducer,
  job: jobReducer,
});

export default reducers;
