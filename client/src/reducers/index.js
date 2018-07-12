import { combineReducers } from 'redux';
import distanceDataReducer from './distance_data_reducer';

const rootReducer = combineReducers({
  data: distanceDataReducer
});

export default rootReducer;
