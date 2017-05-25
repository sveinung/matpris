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
import { registrerBrukar, onInnlogga } from '../firebase-adapter';
import { TOMATRAUD } from '../felles/fargar';

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
  constructor(props) {
    super(props);

    onInnlogga(this.props.onInnlogga);
  }

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
      registrerBrukar(epost, passord)
        .then((user) => {
          console.log("onEnter user", user);
        })
        .catch((feilmelding) => {
          console.log("onEnter error", feilmelding);
          dispatch(registreringsfeil(feilmelding));
        });
    },

    onInnlogga: ({ email }) => {
      dispatch(innloggaSom(email));
      Actions.handleliste();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBrukar);
