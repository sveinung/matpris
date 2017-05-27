import {
  ENDRE_TEKST,
  LEGG_TIL_VARE,
} from '../actions/varer';

const INITIAL_STATE = {
  tekst: '',
  varer: [],
};

export default varer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENDRE_TEKST:
      return {
        ...state,
        tekst: action.payload,
      };
    case LEGG_TIL_VARE:
      return {
        tekst: '',
        varer: [
          ...state.varer,
          {
            tekst: action.payload
          }
        ]
      };
    default:
      return state;
  }
};
