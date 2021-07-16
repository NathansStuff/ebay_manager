import { GET_DVDS } from '../actions/types.js';

const initalState = {
  dvds: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_DVDS:
      return {
        ...state,
        dvds: action.payload,
      };
    default:
      return state;
  }
}
