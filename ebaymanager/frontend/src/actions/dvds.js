import axios from 'axios';
import { GET_DVDS, DELETE_DVD, ADD_DVD, GET_ERRORS } from './types';
import { createMessage } from './messages';

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
      dispatch(createMessage({ dvdDeleted: 'DVD Deleted' }));
      dispatch({
        type: DELETE_DVD,
        payload: id,
      });
    })
    .catch(err => console.log(err));
};

// ADD DVD
export const addDvd = dvd => dispatch => {
  axios
    .post('/api/dvds/', dvd)
    .then(res => {
      dispatch(createMessage({ dvdAdded: 'DVD Added' }));
      dispatch({
        type: ADD_DVD,
        payload: res.data,
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
