import {
  createStore,
  combineReducers,
} from 'redux';

//import { varer } from './handleliste';
import { tekst } from './leggtilbutton';

export default createStore(combineReducers({
//  varer,
  tekst,
}));
