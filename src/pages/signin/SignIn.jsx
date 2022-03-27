import { getRedirectResult } from "firebase/auth";
import React, { useEffect } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  signInWitGoolehPopup,
  signInWitGoolehRedirect,
} from "../../utils/firebase/firebase";
import SignUpForm from "../sign-up/SignUp";

const SignIn = () => {
  useEffect(() => {
    const f = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
      }
    };
    f();
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWitGoolehPopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <SignUpForm />
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <button onClick={signInWitGoolehRedirect}>
        Sign in with google redirect
      </button>
    </div>
  );
};

export default SignIn;
