import { REQUEST_DISTANCE_DATA, RECEIVE_DISTANCE_DATA } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  isFetching: false
};

function distanceDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_DISTANCE_DATA:
      return {
        ...state,
        isFetching: action.payload
      };
    case RECEIVE_DISTANCE_DATA:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default distanceDataReducer;
