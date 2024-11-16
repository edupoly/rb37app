// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9HSSboKXrjUeO6z_nlk2mbxjp0xZTZqQ",
  authDomain: "reactintegration-3761f.firebaseapp.com",
  projectId: "reactintegration-3761f",
  storageBucket: "reactintegration-3761f.appspot.com",
  messagingSenderId: "962859200119",
  appId: "1:962859200119:web:077bd409de3d70a7bda072",
  measurementId: "G-3BQ0XMVSPW",
  databaseUrl:"https://reactintegration-3761f-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);