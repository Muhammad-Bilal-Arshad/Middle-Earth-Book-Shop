import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwL945xFiBQM0NqsXO5PcI0_2whLhph8A",
  authDomain: "madlab-27977.firebaseapp.com",
  projectId: "madlab-27977",
  storageBucket: "madlab-27977.appspot.com",
  messagingSenderId: "776766334315",
  appId: "1:776766334315:web:d9b70b18005329514c982e",
  measurementId: "G-WE4DYC9ZHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db }
export { auth }