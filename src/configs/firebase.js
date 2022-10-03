import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUY7O1V_ChUAwSUEyCs3edlwIlISMzJ2E",
  authDomain: "person-spending.firebaseapp.com",
  projectId: "person-spending",
  storageBucket: "person-spending.appspot.com",
  messagingSenderId: "506600276324",
  appId: "1:506600276324:web:0b05638493e5a56dedfa71",
  measurementId: "G-C8MM9TGHBN",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
