// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA80hXN1UBtRiekbrDIDp1-Jz1nsF1xbI",
  authDomain: "fb-react-e2e7c.firebaseapp.com",
  projectId: "fb-react-e2e7c",
  storageBucket: "fb-react-e2e7c.appspot.com",
  messagingSenderId: "649012172224",
  appId: "1:649012172224:web:28c68018ea3caa99db2425"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)