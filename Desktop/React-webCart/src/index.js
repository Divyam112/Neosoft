import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
//import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // add your firebase config
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
