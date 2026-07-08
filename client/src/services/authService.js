import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

// Register User
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Login User
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const logoutUser = () => {
  return signOut(auth);
};