import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5gBS4MPlYUAg17mHdj8V5D00QEbMCMFU",
  authDomain: "fir-e31ec.firebaseapp.com",
  projectId: "fir-e31ec",
  storageBucket: "fir-e31ec.appspot.com",
  messagingSenderId: "1093805488184",
  appId: "1:1093805488184:web:74ef8b9628c7e2dce6cecd",
  measurementId: "G-C3TGZ517WE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};