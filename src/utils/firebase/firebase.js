import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc as getData, setDoc as setData } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDs3v4WpqWQVREgsLat77WyifY-6XFZ2Ac",
    authDomain: "crown-api-76fe4.firebaseapp.com",
    projectId: "crown-api-76fe4",
    storageBucket: "crown-api-76fe4.appspot.com",
    messagingSenderId: "948078354277",
    appId: "1:948078354277:web:961088640bf498a6000b8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()

export const signInWitGoolehPopup = () => signInWithPopup(auth, googleProvider);

export const signInWitGoolehRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getData(userDocRef)
    if (!userSnapShot.exists()) {
        try {
            const { displayName, email } = userAuth
            const createAt = new Date()
            setData(userDocRef, { email, displayName, createAt, ...additionalInformation })
        }
        catch (error) {
            console.error("Error creating user", error)
        }

    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}