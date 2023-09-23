// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4W3-XM7cIver_xvzJ-CP3VBfCejTnxEk",
  authDomain: "tiendamaik-1421d.firebaseapp.com",
  projectId: "tiendamaik-1421d",
  storageBucket: "tiendamaik-1421d.appspot.com",
  messagingSenderId: "238158906507",
  appId: "1:238158906507:web:28e2bbddb53d5e3b3c008e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)