import firebase from "firebase/app";
import "firebase/auth";

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
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();