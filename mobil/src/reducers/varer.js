//  @flow

import _ from 'lodash';

import {
  HENT_VARER,
  ENDRE_TEKST,
  LEGG_TIL_VARE,
  FJERN_VARE,
} from '../actions/varer';

export type Vare = {
  id: string,
  varenamn: string,
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
    case HENT_VARER:
      return {
        ...state,
        varer: action.payload,
      };
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
          action.payload,
        ]
      };
    case FJERN_VARE:
      return {
        ...state,
        varer: _.filter(state.varer, (vare) => vare.id !== action.payload)
      };
    default:
      return state;
  }
};
