//  @flow

import {
  INNLOGGA_SOM,
} from '../actions/innloggaBrukar';

export type State = {
  epost: string,
  innlogga: boolean,
}

const INITIAL_STATE = {
  epost: '',
  innlogga: false,
};

export default function innloggaBrukar(state: State = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case INNLOGGA_SOM:
      const { epost, innlogga } = action.payload;
      return {
        ...state,
        epost,
        innlogga,
      };
    default:
      return state;
  }
};
