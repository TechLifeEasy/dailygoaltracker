// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';





const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "rugged-night-322113.firebaseapp.com",
  projectId: "rugged-night-322113",
  storageBucket: "rugged-night-322113.appspot.com",
  messagingSenderId: "997424322157",
  appId: "1:997424322157:web:38cecec77b5aecbf7e9164"
};


const app = firebase.initializeApp(firebaseConfig);
const auth=app.auth();
const db=app.firestore();

export { db, auth }