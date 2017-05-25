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

import { endreTekst } from '../actions/tekst';
import { leggTilVare } from '../actions/varer';

class LeggTilButton extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={{height: 40}}
          placeholder="Vare"
          onChangeText={this.props.endreTekst}
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
    tekst: state.tekst
  };
};

const mapDispatchToProps = {
  endreTekst,
  leggTilVare,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeggTilButton);
