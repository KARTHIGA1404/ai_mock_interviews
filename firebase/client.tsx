import { initializeApp, getApp,getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBgkBpc2BAmxF4wk0RyBFLTDWvbM2OWIWA",
    authDomain: "prepwise-343b1.firebaseapp.com",
    projectId: "prepwise-343b1",
    storageBucket: "prepwise-343b1.firebasestorage.app",
    messagingSenderId: "100583584850",
    appId: "1:100583584850:web:af3afe53ede056f374db8b",
    measurementId: "G-DY2BT6WS83"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);