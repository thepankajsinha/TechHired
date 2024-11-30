import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6fIPznX2Gr4XXYDrtixZ8jD5b98Vg8TY",
  authDomain: "career-link-de8ad.firebaseapp.com",
  projectId: "career-link-de8ad",
  storageBucket: "career-link-de8ad.firebasestorage.app",
  messagingSenderId: "551538302511",
  appId: "1:551538302511:web:9041a72d1f63b1bc52b0da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;