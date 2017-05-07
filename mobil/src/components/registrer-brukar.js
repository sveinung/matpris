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
//import FireAuth from 'react-native-firebase-auth';

import {
  ENDRE_EPOST,
  ENDRE_PASSORD,
  ENDRE_FORNAMN,
  ENDRE_ETTERNAMN,
  endreEpost,
  endrePassord,
  endreFornamn,
  endreEtternamn,
} from '../actions/brukar';


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
  }
});

class RegisterBrukar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>
            Epost
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Epostadresse"
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
            onChangeText={this.props.onEndrePassord}
          />
        </View>
        <View>
          <Text>
            Fornavn
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Fornavn"
            onChangeText={this.props.onEndreFornamn}
          />
        </View>
        <View>
          <Text>
            Etternavn
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Etternavn"
            onChangeText={this.props.onEndreEtternamn}
          />
        </View>
        <Button
          onPress={() => this.register(this.props)}
          title="Registrer"
        />
      </View>
    );
  }

  register({ epost, passord, fornamn, etternamn }) {
    //FireAuth.register(email, password, { firstName, lastName });
  }
}

const mapStateToProps = (state) => {
  const { epost, passord, fornamn, etternamn } = state.registrertBrukar;
  return {
    epost,
    passord,
    fornamn,
    etternamn,
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
    onEndreFornamn: (fornamn) => {
      dispatch(endreFornamn(fornamn));
    },
    onEndreEtternamn: (etternamn) => {
      dispatch(endreEtternamn(etternamn));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBrukar);
