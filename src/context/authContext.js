import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase-conection";

const authContext = createContext();

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const updatename = (createdUser, firstname, lastname) =>
    updateProfile(createdUser, {
      displayName: `${firstname.charAt(0).toUpperCase()}. ${
        lastname.charAt(0).toUpperCase() + lastname.slice(1)
      }`,
    });
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());

  const signout = () => signOut(auth);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsuscribe();
  }, []);
  return (
    <authContext.Provider
      value={{ signup, updatename, login, user, signout, loading ,loginWithGoogle}}
    >
      {children}
    </authContext.Provider>
  );
};
