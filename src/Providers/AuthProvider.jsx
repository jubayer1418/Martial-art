import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import Loder from "../Page/Shared/Loder";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const Register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SingIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const handlegoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (curUser) => {
      setUser(curUser);
      setLoading(false);
      console.log("auth", curUser);
      // get and set token
      if (curUser) {
        axios
          .post(`http://localhost:5000/jwt`, {
            email: curUser.email,
          })
          .then((data) => {
            // console.log(data.data.token)
            localStorage.setItem("access-token", data?.data?.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      unsubcribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return <Loder />;
  }
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    handlegoogle,
    logOut,
    SingIn,
    Register,
    updateUserProfile,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
