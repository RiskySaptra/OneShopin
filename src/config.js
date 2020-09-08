import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcTu67gjMZ0dDJjIfa5Lz-_bXAlBXd4ys",
  authDomain: "oneshopping.firebaseapp.com",
  databaseURL: "https://oneshopping.firebaseio.com",
  projectId: "oneshopping",
  storageBucket: "oneshopping.appspot.com",
  messagingSenderId: "700411401653",
  appId: "1:700411401653:web:db177bdf478d615775f5fc",
  measurementId: "G-2ZM507X1PR",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.firestore();
