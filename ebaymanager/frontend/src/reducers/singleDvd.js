import { GET_SINGLE_DVD } from '../actions/types.js';

const initalState = {
  singleDvd: {},
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_SINGLE_DVD:
      return {
        ...state,
        singleDvd: action.payload,
      };
    default:
      return state;
  }
}
