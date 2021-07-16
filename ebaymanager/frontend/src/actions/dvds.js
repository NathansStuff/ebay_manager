import axios from 'axios';
import { GET_DVDS, DELETE_DVD, ADD_DVD } from './types';

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
export const deleteDvd = id => dispatch => {
  axios
    .delete(`/api/dvds/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_DVD,
        payload: id,
      });
    })
    .catch(err => console.log(err));
};

// ADD DVDS
export const addDvd = dvd => dispatch => {
  axios
    .post('/api/dvds/', dvd)
    .then(res => {
      dispatch({
        type: ADD_DVD,
        payload: res.data,
      });
    })
    .catch(err => console.log(err));
};
