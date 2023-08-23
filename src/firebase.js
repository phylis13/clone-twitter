import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnmMlRTAmrBLAdtI6nQuoMIME_TjJC9iA",
  authDomain: "clone-twitter-d974d.firebaseapp.com",
  projectId: "clone-twitter-d974d",
  storageBucket: "clone-twitter-d974d.appspot.com",
  messagingSenderId: "32004136296",
  appId: "1:32004136296:web:9e5510233d0da8a6840add",
  measurementId: "G-W800LGGYGN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
