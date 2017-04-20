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

const LEGG_TIL_VARE = 'LEGG_TIL_VARE';

const leggTilVare = (tekst) => {
  return {
    type: LEGG_TIL_VARE,
    tekst
  }
};

export const varer = (state = [], action) => {
  console.log("varer", state, action);
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
  console.log("state", state);
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
  constructor(props) {
    super(props);
    this.props.tekst = "";
  }

  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
        <TextInput
          style={{padding: 20, paddingTop: 50}}
          placeholder="Legg til vare"
          onChangeText={this.props.tekstEndret}
        />
        <Button
          onPress={this.props.tekstEndret}
          title="Legg til"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={{backgroundColor: LIGHT_BLUE}}>
          {this.props.tekst}
        </Text>
      </View>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Handleliste);
