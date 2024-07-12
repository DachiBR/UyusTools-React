// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAuoLS7bawO0p3_3NSqXVFXcKflQ6lOH3g",
  authDomain: "uyustools-10d3b.firebaseapp.com",
  projectId: "uyustools-10d3b",
  storageBucket: "uyustools-10d3b.appspot.com",
  messagingSenderId: "87032344583",
  appId: "1:87032344583:web:a9428f38121a492058faa2",
  measurementId: "G-FYQJR1561R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export storage
const storage = getStorage(app);

export { storage, app };
