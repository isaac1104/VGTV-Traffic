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
        data: [
          ...action.payload.destination_addresses.map((data, i) => {
            return {
              destination: data.split(' ').slice(0, -2).join(' ').replace( /,/g, "" ),
              duration: action.payload.rows[0].elements[i].duration.text
            };
          })
        ],
        isFetching: false
      };
    default:
      return state;
  }
};

export default distanceDataReducer;
