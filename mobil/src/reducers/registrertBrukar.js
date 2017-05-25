import {
  ENDRE_EPOST,
  ENDRE_PASSORD,
  REGISTRERINGSFEIL,
} from '../actions/registrertBrukar';

const INITIAL_STATE = {
  registreringsfeil: null,
};

export default registrertBrukar = (state = INITIAL_STATE, action) => {
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
    case REGISTRERINGSFEIL:
      return {
        ...state,
        registreringsfeil: action.payload,
      };
    default:
      return state;
  }
};
