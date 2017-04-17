//  @flow

import React, {
  Component,
} from 'react';
import {
  TextInput,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux'

const LEGG_TIL_VARE = 'LEGG_TIL_VARE';

export const leggTilVare = (tekst) => {
  return {
    type: LEGG_TIL_VARE,
    tekst
  }
};

export const varer = (state = [], action) => {
  switch (action.type) {
    case LEGG_TIL_VARE:
      return [
        ...state,
        {
          tekst: action.payload
        }
      ];
    default:
      return state;
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    tekst: ""
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    tekstEndret: (tekst) => {
      dispatch(leggTilVare(tekst));
    }
  }
};

class Handleliste extends Component {
  constructor(props) {
    super(props);
    this.props.tekst = "";
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 20, padding: 20, paddingTop: 50}}
          placeholder="Legg til vare"
          onChangeText={this.props.tekstEndret}
        />
        <Text style={{padding: 10}}>
          {this.props.tekst}
        </Text>
      </View>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Handleliste);
