import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAu0zDWVwjB9V6GrnjjnYj8DCIgyXJQt2k",
  authDomain: "whazzapp-9aaa5.firebaseapp.com",
  projectId: "whazzapp-9aaa5",
  storageBucket: "whazzapp-9aaa5.appspot.com",
  messagingSenderId: "282560351609",
  appId: "1:282560351609:web:1a0d2a9217d3adee36f3a8",
  measurementId: "G-8J5EFX76CM"
});

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
export default db
export { auth, provider }