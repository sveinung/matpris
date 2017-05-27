//  @flow

import {
  INNLOGGINGS_EPOST,
  INNLOGGINGS_PASSORD,
  INNLOGGINGSFEIL,
} from '../actions/innlogging';

type State = {
  epost: string,
  passord: string,
  innloggingsfeil: string,
}

const INITIAL_STATE = {
  epost: '',
  passord: '',
  innloggingsfeil: '',
};

export default function innlogging(state: State = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case INNLOGGINGS_EPOST:
      return {
        ...state,
        epost: action.payload,
      };
    case INNLOGGINGS_PASSORD:
      return {
        ...state,
        passord: action.payload,
      };
    case INNLOGGINGSFEIL:
      return {
        ...state,
        innloggingsfeil: action.payload,
      };
    default:
      return state;
  }
};
