import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCTRBY7vpXqbVHpA7ujXfCZJk9R28ohCQo",
  authDomain: "skill-os-lite.firebaseapp.com",
  databaseURL: "https://skill-os-lite-default-rtdb.firebaseio.com",
  projectId: "skill-os-lite",
  storageBucket: "skill-os-lite.firebasestorage.app",
  messagingSenderId: "592517511614",
  appId: "1:592517511614:web:b2a0994d90934cdb12e1ef"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export default app;