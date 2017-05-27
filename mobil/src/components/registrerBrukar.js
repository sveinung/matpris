import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';

import {
  endreEpost,
  endrePassord,
  registreringsfeil,
} from '../actions/registrertBrukar';
import { innloggaSom } from '../actions/innloggaBrukar';
import { registrerBrukar } from '../adapters/autentisering';
import { TOMATRAUD } from '../felles/fargar';
import textInputStyles from './styles/textInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feilmelding: {
    color: TOMATRAUD,
  },
});

class RegisterBrukar extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.registreringsfeil &&
          <Text style={styles.feilmelding}>{this.props.registreringsfeil}</Text>
        }
        <View>
          <Text>
            Epost
          </Text>
          <TextInput
            style={textInputStyles}
            placeholder="Epostadresse"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.props.onEndreEpost}
          />
        </View>
        <View>
          <Text>
            Passord
          </Text>
          <TextInput
            style={textInputStyles}
            placeholder="Passord"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.props.onEndrePassord}
          />
        </View>
        <Button
          onPress={() => this.props.onEnter(this.props)}
          title="Registrer"
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { epost, passord, registreringsfeil } = state.registrertBrukar;
  return {
    epost,
    passord,
    registreringsfeil,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEndreEpost: (epost) => {
      dispatch(endreEpost(epost));
    },

    onEndrePassord: (passord) => {
      dispatch(endrePassord(passord));
    },

    onEnter: async ({epost, passord}) => {
      try {
        const user = await registrerBrukar(epost, passord);
        dispatch(innloggaSom(user.email));
        Actions.innlogga();
      } catch (feilmelding) {
        dispatch(registreringsfeil(feilmelding));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBrukar);
