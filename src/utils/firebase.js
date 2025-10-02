// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUun24g2yEGrJussdu-F0sCyh838f5OoU",
  authDomain: "netflix-gpt-5e912.firebaseapp.com",
  projectId: "netflix-gpt-5e912",
  storageBucket: "netflix-gpt-5e912.firebasestorage.app",
  messagingSenderId: "19057498175",
  appId: "1:19057498175:web:68e92ebe1e34aef30fc08a",
  measurementId: "G-628CPZP3C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);