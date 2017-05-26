import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyBOT7Eivymq9y1QZJ6O8JsK1-mBVAnlv_8",
  authDomain: "matpris-42648.firebaseapp.com",
  databaseURL: "https://matpris-42648.firebaseio.com",
  projectId: "matpris-42648",
  storageBucket: "matpris-42648.appspot.com",
  messagingSenderId: "619920989476"
});

export const registrerBrukar = (epost, passord) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await firebase.auth()
        .createUserWithEmailAndPassword(epost, passord);
      resolve(user);
    } catch (error) {
      reject(mapToFeilmelding(error.code));
    }
  });
};

export const loggInnBrukar = (epost, passord) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await firebase.auth()
        .signInWithEmailAndPassword(epost, passord);
      resolve(user);
    } catch (error) {
      reject(mapToFeilmelding(error.code));
    }
  });
};

function mapToFeilmelding(errorCode) {
  switch (errorCode) {
    case 'auth/argument-error':
      return 'Ugyldig epostadresse';
    case 'auth/weak-password':
      return 'For svakt passord';
    case 'auth/email-already-in-use':
      return 'Ein brukarkonto med den eposten finst allereie';
    case 'auth/invalid-email':
      return 'Ugyldig epostadresse';
    default:
      console.log("feilkode", errorCode);
      return 'Noko gjekk gale';
  }
}

export const loggUtBrukar = () => {
  return firebase.auth().signOut()
    .catch((error) => {
      console.log("utlogging feila", error);
    });
};
