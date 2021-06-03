import React from "react";
import firebase from "firebase";
import "./Signin.scss";
import StyleFireBaseUi from "react-firebaseui/StyledFirebaseAuth";

let configUi = {
  SignInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

export default function Signin() {
  return <div> Sign In</div>;
}
