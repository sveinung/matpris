//  @flow

import firebase from 'firebase';
import _ from 'lodash';

function hentVarer(): Promise<void> {
  const userId = firebase.auth().currentUser.uid;
  return firebase.database().ref(`users/${userId}/handleliste`)
    .once('value')
    .then((snapshot) => _.valuesIn(snapshot.val()));
}

function leggTilVare(varenamn: string): Promise<void> {
  const userId = firebase.auth().currentUser.uid;

  const vare = {
    varenamn: varenamn,
  };

  const handlelisteKey = firebase.database().ref()
    .child(`users/${userId}/handleliste`).push().key;
  const updates = {};
  updates[`users/${userId}/handleliste/${handlelisteKey}`] = vare;

  return firebase.database().ref().update(updates);
}

export default {
  hentVarer,
  leggTilVare,
}
