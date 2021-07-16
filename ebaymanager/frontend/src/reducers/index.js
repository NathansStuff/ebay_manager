import { combineReducers } from 'redux';
import dvds from './dvds';
import errors from './errors';

export default combineReducers({
  dvds,
  errors,
});
