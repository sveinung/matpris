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
import {
  loggInnBrukar,
  vedEndraAutentiseringsstatus,
} from '../adapters/autentisering';
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


class LoggInn extends Component {
  constructor(props) {
    super(props);

    this.props.endraAutentiseringsstatus();
  }
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
            style={textInputStyles}
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
            style={textInputStyles}
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

    onEnter: async ({ epost, passord }) => {
      try {
        await loggInnBrukar(epost, passord);
        dispatch(innloggaSom(epost));
        Actions.innlogga();
      } catch (feilmelding) {
        dispatch(innloggingsfeil(feilmelding));
      }
    },

    endraAutentiseringsstatus: async () => {
      try {
        const user = await vedEndraAutentiseringsstatus();
        dispatch(innloggaSom(user.email));
        Actions.innlogga();
      } catch (_) {
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggInn);
