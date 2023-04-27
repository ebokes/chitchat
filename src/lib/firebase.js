// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQbTUdgs6YgrZmqslQ16vMMdknbEv0_Oc",
  authDomain: "social-media-app-e50a6.firebaseapp.com",
  projectId: "social-media-app-e50a6",
  storageBucket: "social-media-app-e50a6.appspot.com",
  messagingSenderId: "678920736344",
  appId: "1:678920736344:web:741912a57eb7c0d443042d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
