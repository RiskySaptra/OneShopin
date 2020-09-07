import { auth } from "../config";

export const signup = (email, password) =>
  auth().createUserWithEmailAndPassword(email, password);

export const signin = (email, password) =>
  auth().signInWithEmailAndPassword(email, password);

export const signout = () => auth().signOut();
