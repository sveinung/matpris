import {
  createStore,
  combineReducers,
} from 'redux';

import varer from './reducers/varer';
import tekst from './reducers/tekst';
import registrertBrukar from './reducers/registrertBrukar';
import innlogging from './reducers/innlogging';

export default createStore(combineReducers({
  varer,
  tekst,
  registrertBrukar,
  innlogging,
}));
