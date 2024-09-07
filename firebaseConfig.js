// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDl9XqiYLZNT7-JwIL0d8WxbooZtUkn7yQ",
    authDomain: "adbeats-e1fd0.firebaseapp.com",
    projectId: "adbeats-e1fd0",
    storageBucket: "adbeats-e1fd0.appspot.com",
    messagingSenderId: "190714582709",
    appId: "1:190714582709:web:898a37bc35f75c82d250fc",
    measurementId: "G-S4ZJHEY6R8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get Auth instance from the initialized Firebase app
export const auth = getAuth(firebaseApp);
