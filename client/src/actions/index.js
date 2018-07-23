import { REQUEST_DISTANCE_DATA, RECEIVE_DISTANCE_DATA } from './types';
import axios from 'axios';

const requestDistanceData = () => ({
  type: REQUEST_DISTANCE_DATA,
  payload: true
});

const receiveDistanceData = data => ({
  type: RECEIVE_DISTANCE_DATA,
  payload: data
});

export const fetchDistanceData = () => async dispatch => {
  dispatch(requestDistanceData());
  const request = await axios.get('/api/distance');
  const { data } = request;
  dispatch(receiveDistanceData(data));
};
