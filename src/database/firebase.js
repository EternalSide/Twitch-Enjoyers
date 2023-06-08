// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYF6--Z9xO2JPNBzbjaaThUlafLSHVhtQ",
  authDomain: "twitchenjoyers.firebaseapp.com",
  projectId: "twitchenjoyers",
  storageBucket: "twitchenjoyers.appspot.com",
  messagingSenderId: "676541833560",
  appId: "1:676541833560:web:84c4e58235e8b00efa452d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export { provider };
