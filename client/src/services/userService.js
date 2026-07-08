import { ref, set } from "firebase/database";
import { db } from "../firebase/firebase";

export const saveUserData = async (
  uid,
  fullName,
  email,
  goal,
  role
) => {
  await set(ref(db, "users/" + uid), {
    fullName,
    email,
    goal,
    role,
    createdAt: Date.now(),
  });
};