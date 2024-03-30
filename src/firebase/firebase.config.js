// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaNnEJj4RRue_51Ut9bQLvfY8aNAP852Q",
  authDomain: "user-email-password-auth-f1d7e.firebaseapp.com",
  projectId: "user-email-password-auth-f1d7e",
  storageBucket: "user-email-password-auth-f1d7e.appspot.com",
  messagingSenderId: "768119270565",
  appId: "1:768119270565:web:98b1556beada8ab22af14c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
