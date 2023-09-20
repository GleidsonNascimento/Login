import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword as createUser,
  signInWithEmailAndPassword as signIn,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRTAAZ53FRfyubJ-ZWA7P4e9m6fZXny0g",
  authDomain: "login-585b4.firebaseapp.com",
  projectId: "login-585b4",
  storageBucket: "login-585b4.appspot.com",
  messagingSenderId: "342964281609",
  appId: "1:342964281609:web:93c0225208c3eed80e33d8",
  measurementId: "G-6TCYWYFGKR",
};

const app = initializeApp(firebaseConfig);
export const auth2 = getAuth(app);

export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUser(auth2, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signIn(auth2, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
