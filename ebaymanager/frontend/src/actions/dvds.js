import axios from 'axios';
import { GET_DVDS } from './types';

// GET DVDS
export const getDvds = () => dispatch => {
  axios
    .get('/api/dvds/')
    .then(res => {
      dispatch({
        type: GET_DVDS,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};

// DELETE DVDS
export const deleteDvds = (id) => dispatch => {
  axios
    .get('/api/dvds/')
    .then(res => {
      dispatch({
        type: GET_DVDS,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};