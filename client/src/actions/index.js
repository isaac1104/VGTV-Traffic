import { REQUEST_DISTANCE_DATA, RECEIVE_DISTANCE_DATA } from './types';
import axios from 'axios';

const requestDistanceData = () => ({
  type: REQUEST_DISTANCE_DATA,
  payload: true
});

const receiveDistanceData = data => {
  const duration = data.rows[0].elements.map(data => {
    return data.duration.text;
  });
  const newData = data.destination_addresses.map((data, i) => {
    return { destination: data.split(' ').slice(0, -2).join(' ').replace( /,/g, "" ), duration: duration[i] };
  });
  return {
    type: RECEIVE_DISTANCE_DATA,
    payload: newData
  };
};

export const fetchDistanceData = () => async dispatch => {
  dispatch(requestDistanceData());
  const request = await axios.get('/api/distance');
  const { data } = request;
  dispatch(receiveDistanceData(data));
};
