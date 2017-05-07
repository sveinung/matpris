import { LEGG_TIL_VARE } from '../actions/varer';

export default varer = (state = [], action) => {
  switch (action.type) {
    case LEGG_TIL_VARE:
      return [
        ...state,
        {
          tekst: action.payload
        }
      ];
    default:
      return state;
  }
};
