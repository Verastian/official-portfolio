// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGy9PHhieIs5Kl8TzUEjfo2wmAwyIZYvE",
  authDomain: "my-portfolio-de1ee.firebaseapp.com",
  projectId: "my-portfolio-de1ee",
  storageBucket: "my-portfolio-de1ee.appspot.com",
  messagingSenderId: "837239539827",
  appId: "1:837239539827:web:85fd76f3c88c8f8bd7c206",
  measurementId: "G-TY2JXS9E74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);