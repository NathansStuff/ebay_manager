import axios from 'axios';
import { GET_DVDS, DELETE_DVD, ADD_DVD, GET_SINGLE_DVD } from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

// GET DVDS
export const getDvds = () => (dispatch, getState) => {
  axios
    .get('/api/dvds/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_DVDS,
        payload: res.data,
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE DVDS
export const deleteDvd = id => (dispatch, getState) => {
  axios
    .delete(`/api/dvds/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ dvdDeleted: 'DVD Deleted' }));
      dispatch({
        type: DELETE_DVD,
        payload: id,
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// ADD DVD
export const addDvd = dvd => (dispatch, getState) => {
  axios
    .post('/api/dvds/', dvd, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ dvdAdded: 'DVD Added' }));
      dispatch({
        type: ADD_DVD,
        payload: res.data,
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
