// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKBNYbYN3DYiDCQP8P2N9AbMBPv1XT9nU",
  authDomain: "hair-studio-8df6a.firebaseapp.com",
  projectId: "hair-studio-8df6a",
  storageBucket: "hair-studio-8df6a.appspot.com",
  messagingSenderId: "1030034527743",
  appId: "1:1030034527743:web:4c183bdc1a8bbea85d83ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
