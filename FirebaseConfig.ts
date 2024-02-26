// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQQitxF-ieg2PuJ2WJXDe-dobK_GJ5pAc",
  authDomain: "mobile-pos-ericj.firebaseapp.com",
  projectId: "mobile-pos-ericj",
  storageBucket: "mobile-pos-ericj.appspot.com",
  messagingSenderId: "516585733765",
  appId: "1:516585733765:web:1449dbecbcb37da7c433ec",
  measurementId: "G-LY1W4M42M2",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
