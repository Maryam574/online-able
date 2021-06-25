import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDewCYffw760Dttoruy9HRhjhHkKxRdXg8",
    authDomain: "online-able-b17bc.firebaseapp.com",
    projectId: "online-able-b17bc",
    storageBucket: "online-able-b17bc.appspot.com",
    messagingSenderId: "875017366992",
    appId: "1:875017366992:web:2e4052f65648cb46b49dd5",
    measurementId: "G-GB0Z0R5JCR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };