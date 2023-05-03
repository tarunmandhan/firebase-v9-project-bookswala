import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
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
const firestore = getFirestore(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signinUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  const signinWithGoogle = (email, password) =>
    signInWithPopup(firebaseAuth, googleProvider);

  const handleCreateNewListing = (name, isbn, price, cover) => {};

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
        signinWithGoogle,
        isLoggedIn,
        handleCreateNewListing,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
