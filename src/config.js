import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQEhPTClp4iabKT1rzGn54NDOZnD0_RUk",
  authDomain: "oneshoppin.firebaseapp.com",
  databaseURL: "https://oneshoppin.firebaseio.com",
  projectId: "oneshoppin",
  storageBucket: "oneshoppin.appspot.com",
  messagingSenderId: "941089312971",
  appId: "1:941089312971:web:2acd62be208a0eaf3d4b4e",
  measurementId: "G-NDFMFTEKDD",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();
