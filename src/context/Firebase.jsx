import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyCHNiQiGLWKMPBYZmr1ph374vhp2vATOaU",
  authDomain: "fir-v9-project-bookswala.firebaseapp.com",
  projectId: "fir-v9-project-bookswala",
  storageBucket: "fir-v9-project-bookswala.appspot.com",
  messagingSenderId: "393504597031",
  appId: "1:393504597031:web:3960c78065b6c6dd2f1a02",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signinUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, signinUserWithEmailAndPassword }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
