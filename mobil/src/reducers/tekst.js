import { ENDRE_TEKST } from '../actions/tekst';

export default tekst = (state = "", action) => {
  switch (action.type) {
    case ENDRE_TEKST:
      return action.payload;
    default:
      return state;
  }
};
