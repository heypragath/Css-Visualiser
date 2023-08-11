// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOYJhaUD_AqZyWUQJLCxi3M6sJMJB4gx0",
  authDomain: "visualise-learn.firebaseapp.com",
  projectId: "visualise-learn",
  storageBucket: "visualise-learn.appspot.com",
  messagingSenderId: "427860546991",
  appId: "1:427860546991:web:8e81ea699e5a6ea6c60b5a",
  measurementId: "G-8KJSXLV7DF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);