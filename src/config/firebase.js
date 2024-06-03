// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZryiuDRggXK0WUVd_pMJaTOxheaHycOo",
  authDomain: "prueba-d02d3.firebaseapp.com",
  projectId: "prueba-d02d3",
  storageBucket: "prueba-d02d3.appspot.com",
  messagingSenderId: "229075976669",
  appId: "1:229075976669:web:904f5b4c0513581190b634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

