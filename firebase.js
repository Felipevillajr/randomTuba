import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDLxSCrgrG4IeUNF7py15dMYNcSfxOvqn0",
  authDomain: "randomtuba-d25db.firebaseapp.com",
  databaseURL: "https://randomtuba-d25db-default-rtdb.firebaseio.com",
  projectId: "randomtuba-d25db",
  storageBucket: "randomtuba-d25db.appspot.com",
  messagingSenderId: "742270090380",
  appId: "1:742270090380:web:7d5b4c7fde2a518c908fa9",
  measurementId: "G-8MGXLM42G0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
