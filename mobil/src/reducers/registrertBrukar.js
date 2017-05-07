import {
  ENDRE_EPOST,
  ENDRE_PASSORD,
  ENDRE_FORNAMN,
  ENDRE_ETTERNAMN,
} from '../actions/brukar';

export default registrertBrukar = (state = {}, action) => {
  switch (action.type) {
    case ENDRE_EPOST:
      return {
        ...state,
        epost: action.payload,
      };
    case ENDRE_PASSORD:
      return {
        ...state,
        passord: action.payload,
      };
    case ENDRE_FORNAMN:
      return {
        ...state,
        fornamn: action.payload,
      };
    case ENDRE_ETTERNAMN:
      return {
        ...state,
        etternamn: action.payload,
      };
    default:
      return state;
  }
};
