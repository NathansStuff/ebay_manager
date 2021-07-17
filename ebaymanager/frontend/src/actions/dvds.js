import axios from 'axios';
import { GET_DVDS, DELETE_DVD, ADD_DVD } from './types';
import { createMessage, returnErrors } from './messages';

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
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
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
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
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
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
