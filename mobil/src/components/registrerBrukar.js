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
import FirebaseCrash from 'react-native-firebase-crash-report';

import {
  endreEpost,
  endrePassord,
  registreringsfeil,
} from '../actions/brukar';
import { registrerBrukar } from '../firebase-adapter';

const TOMATRAUD = '#ff6347';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 200,
    height: 30,
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
          <Text style={styles.feilmelding}>Feil oppstod ved registrering</Text>
        }
        <View>
          <Text>
            Epost
          </Text>
          <TextInput
            style={styles.textInput}
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
            style={styles.textInput}
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
    onEnter: ({epost, passord}) => {
      try {
        registrerBrukar(epost, passord)
          .then(() => {
          })
          .catch(error => {
            dispatch(registreringsfeil());
          });
      } catch (error) {
        FirebaseCrash.log('Innlogging feila');
        FirebaseCrash.report('Innlogging feila');
        dispatch(registreringsfeil());
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBrukar);
