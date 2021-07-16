import axios from 'axios';
import { GET_DVDS } from './types';

// GET DVDS
export const getDvds = () => dispatch => {
  axios
    .get('/dvd/')
    .then(res => {
      dispatch({
        type: GET_DVDS,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};
