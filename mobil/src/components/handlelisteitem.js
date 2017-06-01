//  @flow

import React, {
  Component,
} from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';

import { LIGHT_BLUE } from '../felles/fargar';
import { fjernVare } from '../actions/varer';

class HandlelisteItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  swipeoutButtons() {
    return [
      {
        text: 'Slett',
        onPress: () => this.props.fjernVare(this.props.vare.id)
      }
    ];
  }

  render() {
    return (
      <Swipeout
        style={styles.container}
        right={this.swipeoutButtons()}
      >
        <Text style={styles.text}>{this.props.vare.varenamn}</Text>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  text: {
    fontSize: 24,
    backgroundColor: LIGHT_BLUE,
    padding: 16,
  }
});

const mapDispatchToProps = {
  fjernVare,
};

export default connect(null, mapDispatchToProps)(HandlelisteItem);
