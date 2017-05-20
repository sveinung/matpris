//  @flow

import React, {
  Component,
} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'

import { loggUt } from '../actions/innlogging';
import { loggUtBrukar } from '../firebase-adapter';

class Brukarsesjon extends Component {
  renderBrukar() {
    return (
      <View>
        <Text style={styles.brukarInfo}>{this.props.epost}</Text>
        <Button
          onPress={this.props.onLoggut}
          title="Loggut"
          color="#841584"
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        {
          this.props.innlogga && this.renderBrukar()
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  brukarInfo: {
    padding: 10,
    marginTop: 60,
  },
});

const mapStateToProps = (state) => {
  const { epost, innlogga } = state.innlogging;

  return {
    epost,
    innlogga,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoggut: () => {
      loggUtBrukar()
        .then(() => dispatch(loggUt()));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Brukarsesjon);
