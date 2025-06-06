// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW16ehJoR424Fr8KTK0LCnJfIViuaQwZU",
  authDomain: "netflix-ai-4a9b1.firebaseapp.com",
  projectId: "netflix-ai-4a9b1",
  storageBucket: "netflix-ai-4a9b1.firebasestorage.app",
  messagingSenderId: "628033712865",
  appId: "1:628033712865:web:78119ede01456e480cbda0",
  measurementId: "G-CKK3Y6GCTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);