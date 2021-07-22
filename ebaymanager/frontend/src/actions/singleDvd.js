import axios from 'axios';
import { GET_SINGLE_DVD } from './types';
import { returnErrors } from './messages';
import { tokenConfig } from './auth';

// GET SINGLE DVD
export const getSingleDvd = id => (dispatch, getState) => {
    const url = '/api/dvds/' + id
    console.log(url)
    console.log('***')
    axios
      .get(url, tokenConfig(getState))
      .then(res => {
        dispatch({
          type: GET_SINGLE_DVD,
          payload: res.data,
        });
      })
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  