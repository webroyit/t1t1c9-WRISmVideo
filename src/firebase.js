import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBnYSMjBoOEebXW3rb-3DOZrPYjMBWMXp0",
    authDomain: "wrismvideo.firebaseapp.com",
    projectId: "wrismvideo",
    storageBucket: "wrismvideo.appspot.com",
    messagingSenderId: "642866151160",
    appId: "1:642866151160:web:936eeff726568b9a6c050d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;