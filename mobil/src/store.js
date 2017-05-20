import {
  createStore,
  combineReducers,
} from 'redux';

import varer from './reducers/varer';
import tekst from './reducers/tekst';
import registrertBrukar from './reducers/registrertBrukar';
import innlogging from './reducers/innlogging';

import { LOGG_UT } from './actions/innlogging';

const appReducer = combineReducers({
  varer,
  tekst,
  registrertBrukar,
  innlogging,
});

const rootReducer = (state, action) => {
  if (action.type === LOGG_UT) {
    state = undefined
  }

  return appReducer(state, action)
};

export default createStore(rootReducer);
