// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCKYzQt_5EgcbcnzIfnyPjipvvSXKEw0N4",
    authDomain: "rugged-night-322113.firebaseapp.com",
    projectId: "rugged-night-322113",
    storageBucket: "rugged-night-322113.appspot.com",
    messagingSenderId: "997424322157",
    appId: "1:997424322157:web:c6c38404438e530a7e9164"
  };



const app = firebase.initializeApp(firebaseConfig);
const auth=app.auth();
const db=app.firestore();

export { db, auth }