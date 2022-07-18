import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDlLDW-zFzxEBLMs9e6sMzi1FpOLm8A8-0",
  authDomain: "learn-firebase-1f7b2.firebaseapp.com",
  projectId: "learn-firebase-1f7b2",
  storageBucket: "learn-firebase-1f7b2.appspot.com",
  messagingSenderId: "822039614606",
  appId: "1:822039614606:web:7b298f74b56538b45125df",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
//Init services
export const db = getFirestore(app);
export const auth = getAuth(app);
