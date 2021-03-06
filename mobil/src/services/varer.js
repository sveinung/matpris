//  @flow

import firebase from 'firebase';
import _ from 'lodash';

import type { Vare } from '../reducers/varer';

function hentVarer(): Promise<void> {
  const userId = firebase.auth().currentUser.uid;
  return firebase.database().ref(`users/${userId}/handleliste`)
    .once('value')
    .then((snapshot) => snapshot.toJSON())
    .then((values) => {
      return _.map(values, (value, key) => {
        return {
          id: key,
          ...value,
        };
      });
    });
}

function leggTilVare(varenamn: string): Promise<Vare> {
  const userId = firebase.auth().currentUser.uid;

  const vare = {
    varenamn: varenamn,
  };

  const handlelisteKey = firebase.database().ref()
    .child(`users/${userId}/handleliste`).push().key;
  const updates = {};
  updates[`users/${userId}/handleliste/${handlelisteKey}`] = vare;

  return firebase.database().ref().update(updates)
    .then(() => {
      return {
        id: handlelisteKey,
        varenamn,
      };
    });
}

function fjernVare(vareId: string) {
  const userId = firebase.auth().currentUser.uid;
  return firebase.database()
    .ref(`users/${userId}/handleliste/${vareId}`)
    .remove();
}

export default {
  hentVarer,
  leggTilVare,
  fjernVare,
}
