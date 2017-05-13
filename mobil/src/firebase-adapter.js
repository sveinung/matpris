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
  return firebase.auth()
    .createUserWithEmailAndPassword(epost, passord);
};
