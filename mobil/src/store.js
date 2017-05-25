import {
  createStore,
  combineReducers,
} from 'redux';

import varer from './reducers/varer';
import tekst from './reducers/tekst';
import registrertBrukar from './reducers/registrertBrukar';
import innloggaBrukar from './reducers/innloggaBrukar';

import { LOGG_UT } from './actions/innloggaBrukar';

const appReducer = combineReducers({
  varer,
  tekst,
  registrertBrukar,
  innloggaBrukar,
});

const rootReducer = (state, action) => {
  if (action.type === LOGG_UT) {
    state = undefined
  }

  return appReducer(state, action)
};

export default createStore(rootReducer);
