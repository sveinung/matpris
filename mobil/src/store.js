import {
  createStore,
  combineReducers,
} from 'redux';

import varer from './reducers/varer';
import registrertBrukar from './reducers/registrertBrukar';
import innloggaBrukar from './reducers/innloggaBrukar';
import innlogging from './reducers/innlogging';

import { LOGG_UT } from './actions/innloggaBrukar';

const appReducer = combineReducers({
  varer,
  registrertBrukar,
  innloggaBrukar,
  innlogging,
});

const rootReducer = (state, action) => {
  if (action.type === LOGG_UT) {
    state = undefined
  }

  return appReducer(state, action)
};

export default createStore(rootReducer);
