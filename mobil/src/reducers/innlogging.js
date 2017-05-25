import {
  INNLOGGINGS_EPOST,
  INNLOGGINGS_PASSORD,
  INNLOGGINGSFEIL,
} from '../actions/innlogging';

export default innlogging = (state = {}, action) => {
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
