//  @flow

import {
  ENDRE_EPOST,
  ENDRE_PASSORD,
  REGISTRERINGSFEIL,
} from '../actions/registrertBrukar';

type State = {
  epost: string,
  passord: string,
  registreringsfeil: string,
}

const INITIAL_STATE = {
  epost: '',
  passord: '',
  registreringsfeil: '',
};

export default function registrertBrukar(state: State = INITIAL_STATE, action: Action) {
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
