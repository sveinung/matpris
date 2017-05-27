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

import { endreTekst, leggTilVare } from '../actions/varer';
import textInputStyles from './styles/textInput';

class LeggTilButton extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={textInputStyles}
          placeholder="Vare"
          onChangeText={this.props.endreTekst}
          value={this.props.tekst}
        />
        <Button
          onPress={() => this.props.leggTilVare(this.props.tekst)}
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
    tekst: state.varer.tekst
  };
};

const mapDispatchToProps = {
  endreTekst,
  leggTilVare,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeggTilButton);
