// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqUOtuhL9nqbJ6T8LFN1zbR1D0NYwDteE",
    authDomain: "bonded-7dc5f.firebaseapp.com",
    databaseURL: "https://bonded-7dc5f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bonded-7dc5f",
    storageBucket: "bonded-7dc5f.firebasestorage.app",
    messagingSenderId: "625990838894",
    appId: "1:625990838894:web:26a4a37946771f824f947f",
    measurementId: "G-G5C06PVF2X"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }