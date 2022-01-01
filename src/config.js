import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAL-oJAolT1uOWgMPkippzV3z68D1ZRMD8",
  authDomain: "money-experiment-6aac5.firebaseapp.com",
  projectId: "money-experiment-6aac5",
  storageBucket: "money-experiment-6aac5.appspot.com",
  messagingSenderId: "1045279180074",
  appId: "1:1045279180074:web:cf75b09adf351c20f1ca53",
  measurementId: "G-8803W4HQ8P"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref();

