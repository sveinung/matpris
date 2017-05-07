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
  }
});


class LoggInn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>
            Brukernavn
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Brukernavn"
            onChangeText={() => {}}
          />
        </View>
        <View>
          <Text>
            Passord
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Passord"
            onChangeText={() => {}}
          />
        </View>
        <Button
          onPress={() => {}}
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

export default LoggInn;
