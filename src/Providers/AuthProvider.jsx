import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);
  const Register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SingIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const handlegoogle = () => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (curUser) => {
      setUser(curUser);
      setLoding(false);
      console.log("auth", curUser);
    });
    return () => {
      unsubcribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const authInfo = {
    user,
    setUser,
    loading,
    setLoding,
    handlegoogle,
    logOut,
    SingIn,
    Register,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
