import React, {
  Component,
} from 'react';
import {
  Button,
  TextInput,
  View,
  Text,
  ListView,
  Header,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';

import {
  endreEpost,
  endrePassord,
  innloggingsfeil,
} from '../actions/innlogging';
import { innloggaSom } from '../actions/innloggaBrukar';
import { loggInnBrukar } from '../firebase-adapter';
import { TOMATRAUD } from '../felles/fargar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 100,
    height: 30,
  },
  feilmelding: {
    color: TOMATRAUD,
  },
});


class LoggInn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          {this.props.innloggingsfeil &&
            <Text style={styles.feilmelding}>{this.props.innloggingsfeil}</Text>
          }
          <Text>
            Brukernavn
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Brukernavn"
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
          disabled={!this.props.epost || !this.props.passord}
          title="Logg inn"
        />
        <Button
          onPress={() => Actions.registrerBrukar()}
          title="Registrer"
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { epost, passord, innloggingsfeil } = state.innlogging;
  return {
    epost,
    passord,
    innloggingsfeil,
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

    onEnter: ({ epost, passord }) => {
      loggInnBrukar(epost, passord)
        .then(() => {
          dispatch(innloggaSom(epost));
          Actions.innlogga();
        })
        .catch((feilmelding) => {
          console.log("innloggingsfeil", feilmelding);
          dispatch(innloggingsfeil(feilmelding));
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggInn);
