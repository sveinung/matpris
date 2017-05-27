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
import { Actions } from 'react-native-router-flux';
import { Gravatar } from 'react-native-gravatar';

import { loggUt } from '../actions/innloggaBrukar';
import { loggUtBrukar } from '../adapters/autentisering';

class Brukarsesjon extends Component {
  renderBrukar() {
    return (
      <View>
        <Text style={styles.brukarInfo}>{this.props.epost}</Text>
        <Gravatar
          options={this.gravatarOptions()}
          style={styles.roundedProfileImage}
        />
        <Button
          onPress={this.props.onLoggut}
          title="Logg ut"
          color="#841584"
        />
      </View>
    );
  }

  gravatarOptions() {
    return {
      email: this.props.epost,
      parameters: {"size": "200", "d": "mm"},
      secure: true,
    };
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
  roundedProfileImage: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 25
  }
});

const mapStateToProps = (state) => {
  const { epost, innlogga } = state.innloggaBrukar;

  return {
    epost,
    innlogga,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoggut: () => {
      loggUtBrukar()
        .then(() => {
          dispatch(loggUt());
          Actions.logginn();
        });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Brukarsesjon);
