// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYEkLvN-_ugsVi5o4u600aKr4RJ9NT0Iw",
  authDomain: "smartprinthub-ccc19.firebaseapp.com",
  projectId: "smartprinthub-ccc19",
  storageBucket: "smartprinthub-ccc19.appspot.com",
  messagingSenderId: "1077176418712",
  appId: "1:1077176418712:web:6715953e21c818b26eebed",
  measurementId: "G-0NG06VM3VZ"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
