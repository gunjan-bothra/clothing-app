import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyCvrVRop2_GGqDcO1ULlYSJFDNwbVfStyw",
    authDomain: "clothing-db-24ac0.firebaseapp.com",
    databaseURL: "https://clothing-db-24ac0.firebaseio.com",
    projectId: "clothing-db-24ac0",
    storageBucket: "",
    messagingSenderId: "358386712082",
    appId: "1:358386712082:web:f8b591501af63001"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;