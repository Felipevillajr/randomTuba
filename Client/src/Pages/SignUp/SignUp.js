import React from "react";
import firebase from "firebase";
import "./Signin.scss";
import StyleFireBaseAuth from "react-firebaseui/StyledFirebaseAuth";

let uiConfig = {
  SignInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

export default function Signin() {
  return (
    <>
      <div> Sign UP</div>;
      <StyleFireBaseAuth uiConfig={uiConfig} fisebaseAuth={firebase.auth()} />
    </>
  );
}
