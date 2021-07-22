import {
  GET_DVDS,
  DELETE_DVD,
  ADD_DVD,
} from '../actions/types.js';

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

    case DELETE_DVD:
      return {
        ...state,
        dvds: state.dvds.filter(dvd => dvd.id !== action.payload),
      };

    case ADD_DVD:
      return {
        ...state,
        dvds: [...state.dvds, action.payload],
      };
    default:
      return state;
  }
}
