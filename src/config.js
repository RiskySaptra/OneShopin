import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBp0TeJ2RFijs3g0GMiIn6VTpvK4d4l7SU",
  authDomain: "dashboard-ocr.firebaseapp.com",
  databaseURL: "https://dashboard-ocr.firebaseio.com",
  projectId: "dashboard-ocr",
  storageBucket: "dashboard-ocr.appspot.com",
  messagingSenderId: "464455043732",
  appId: "1:464455043732:web:8a736a4120b57489078281"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref();

