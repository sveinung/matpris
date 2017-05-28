//  @flow

import firebase from 'firebase';

function leggTilVare(varenamn: string): Promise<void> {
  const userId = firebase.auth().currentUser.uid;

  const vare = {
    varenamn,
  };

  const handlelisteKey = firebase.database().ref()
    .child(`users/${userId}/handleliste`).push().key;
  const updates = {};
  updates[`users/${userId}/handleliste/${handlelisteKey}`] = vare;

  return firebase.database().ref().update(updates);
}

export default {
  leggTilVare,
}
