//  @flow

import React, {
  Component,
} from 'react';
import {
  Button,
  TextInput,
  View,
  Text,
  ListView,
} from 'react-native';
import { connect } from 'react-redux'

import LeggTilButton from './leggtilbutton';

import { LEGG_TIL_VARE, leggTilVare } from './actions/varer';

export const varer = (state = [], action) => {
  switch (action.type) {
    case LEGG_TIL_VARE:
      return [
        ...state,
        {
          tekst: action.tekst
        }
      ];
    default:
      return state;
  }
};

const mapStateToProps = (state) => {
  console.log("Handleliste mapStateToProps", state);
  return {
    tekst: state.payload
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    tekstEndret: (tekst) => {
      dispatch(leggTilVare(tekst));
    }
  }
};

const LIGHT_BLUE = '#dff1f9';

class Handleliste extends Component {
  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
        <LeggTilButton />
        <Text style={{backgroundColor: LIGHT_BLUE}}>
          {this.props.tekst}
        </Text>
      </View>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Handleliste);
