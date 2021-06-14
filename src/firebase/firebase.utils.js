import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA9m-DwBKXjjVSFNhQrLd4X6VBGOeBKyVA",
    authDomain: "crwn-clothing-db-c8477.firebaseapp.com",
    projectId: "crwn-clothing-db-c8477",
    storageBucket: "crwn-clothing-db-c8477.appspot.com",
    messagingSenderId: "765085511016",
    appId: "1:765085511016:web:a4fb250c274d85b76fbadd",
    measurementId: "G-4ZPH1PQZHB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider).catch(err => console.log('error in google sign in popup'));

export default firebase;