import { combineReducers } from 'redux';
import dvds from './dvds';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import singleDvd from './singleDvd';

export default combineReducers({
  dvds,
  errors,
  messages,
  auth,
  singleDvd,
});
