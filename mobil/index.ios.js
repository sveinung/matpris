/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Provider,
} from 'react-redux';

import store from './src/store';
import Handleliste from './src/handleliste';
import LeggTilButton from './src/leggtilbutton';

export default class mobil extends Component {
  render() {
    return (
      <Provider store={store}>
        <LeggTilButton />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('mobil', () => mobil);
