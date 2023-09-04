// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyYSxpqr_BzCuGGNw8yBoGnbGnpC8pcm8",
  authDomain: "web-app-backend-d943f.firebaseapp.com",
  projectId: "web-app-backend-d943f",
  storageBucket: "web-app-backend-d943f.appspot.com",
  messagingSenderId: "455507566516",
  appId: "1:455507566516:web:b7e48134079c9ffd285ce1",
  measurementId: "G-LE92NMN1SW"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);