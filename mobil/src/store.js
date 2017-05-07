import {
  createStore,
  combineReducers,
} from 'redux';

import varer from './reducers/varer';
import tekst from './reducers/tekst';
import registrertBrukar from './reducers/registrertBrukar';

export default createStore(combineReducers({
  varer,
  tekst,
  registrertBrukar,
}));
