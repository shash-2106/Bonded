// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqUOtuhL9nqbJ6T8LFN1zbR1D0NYwDteE",
  authDomain: "bonded-7dc5f.firebaseapp.com",
  projectId: "bonded-7dc5f",
  storageBucket: "bonded-7dc5f.firebasestorage.app",
  messagingSenderId: "625990838894",
  appId: "1:625990838894:web:26a4a37946771f824f947f",
  measurementId: "G-G5C06PVF2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);