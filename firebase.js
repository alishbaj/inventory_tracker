// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXXCDnF_prL8YTUPY002pBsNIi9leX_ms",
  authDomain: "inventory-management-a632e.firebaseapp.com",
  projectId: "inventory-management-a632e",
  storageBucket: "inventory-management-a632e.appspot.com",
  messagingSenderId: "187162773955",
  appId: "1:187162773955:web:128f908b8daac960245576",
  measurementId: "G-L6MLREWH2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};