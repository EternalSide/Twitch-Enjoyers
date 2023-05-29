import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvWGTmQWCJs3CaXNIYMWpBZ6s106J5HV0",
  authDomain: "twitch-enjoyers.firebaseapp.com",
  projectId: "twitch-enjoyers",
  storageBucket: "twitch-enjoyers.appspot.com",
  messagingSenderId: "286219011708",
  appId: "1:286219011708:web:b1d8147f3a74b4fff56bf9",
  measurementId: "G-49DX305ZM1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
