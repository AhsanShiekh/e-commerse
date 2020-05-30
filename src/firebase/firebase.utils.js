import  firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

const Config = {
    apiKey: "AIzaSyAJjZuxtd_nBnZzXdZRQW1r_JN76DgGse8",
    authDomain: "crown-shopping-db-929f7.firebaseapp.com",
    databaseURL: "https://crown-shopping-db-929f7.firebaseio.com",
    projectId: "crown-shopping-db-929f7",
    storageBucket: "crown-shopping-db-929f7.appspot.com",
    messagingSenderId: "346987690781",
    appId: "1:346987690781:web:09e080cffa02bd3efabff4",
    measurementId: "G-0JDYHF2T6G"
  }

  firebase.initializeApp(Config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;