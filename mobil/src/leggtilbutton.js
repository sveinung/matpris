//  @flow

import React, {
  Component,
} from 'react';
import {
  Button,
  TextInput,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';

import { ENDRE_TEKST, endreTekst } from './actions/tekst';
import { leggTilVare } from './actions/varer';

export const tekst = (state = "", action) => {
  switch (action.type) {
    case ENDRE_TEKST:
      return action.payload;
    default:
      return state;
  }
};

class LeggTilButton extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={{height: 40}}
          placeholder="Vare"
          onChangeText={this.props.onChangeTekst}
        />
        <Button
          onPress={() => this.props.onEnter(this.props.tekst)}
          title="Legg til vare"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tekst: state.tekst
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTekst: (tekst) => {
      dispatch(endreTekst(tekst));
    },
    onEnter: (tekst) => {
      dispatch(leggTilVare(tekst));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeggTilButton);
