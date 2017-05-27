//  @flow

import {
  ENDRE_TEKST,
  LEGG_TIL_VARE,
} from '../actions/varer';

export type Vare = {
  tekst: string,
}

type State = {
  tekst: string,
  varer: Array<Vare>,
}

const INITIAL_STATE = {
  tekst: '',
  varer: [],
};

export default function varer(state: State = INITIAL_STATE, action: Action) {
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
