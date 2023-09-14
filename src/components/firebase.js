import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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
const analytics = getAnalytics(app);
