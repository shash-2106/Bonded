// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, set, update, remove } from "firebase/database"; //Realtime database
import { getFirestore, collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore"; //Firestore database

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
  measurementId: "G-G5C06PVF2X",
  databaseURL:"https://console.firebase.google.com/u/0/project/bonded-7dc5f/database/bonded-7dc5f-default-rtdb/data/~2F"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const db = getFirestore(app);