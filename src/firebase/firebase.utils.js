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

export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;
    try {
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const userSnap = await userRef.get();

        // store in db if user doesn't exist
        if (!userSnap.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        return userRef;
    } catch (error) {
        console.log('Error while creating User Profile!', error.message);
    }

}

export default firebase;