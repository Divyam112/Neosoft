import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
//import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCryIv2Y6yjBwG_iNTGpGf3VOESbBrE0Qk",
  authDomain: "cart-4fa0e.firebaseapp.com",
  projectId: "cart-4fa0e",
  storageBucket: "cart-4fa0e.appspot.com",
  messagingSenderId: "628135944236",
  appId: "1:628135944236:web:8c8f6083fc6582cc52b189",
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//export default db;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
