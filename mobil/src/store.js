import {
  createStore,
  combineReducers,
} from 'redux';

import { varer } from './handleliste';
import { tekst } from './leggtilbutton';
import registrertBrukar from './reducers/registrertBrukar';

export default createStore(combineReducers({
  varer,
  tekst,
  registrertBrukar,
}));
