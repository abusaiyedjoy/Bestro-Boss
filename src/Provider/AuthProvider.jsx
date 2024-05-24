import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from './../Fairbase/Fairbase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
 
  const updateProfile =(name, PhotoURL)=>{
    return updateProfile(auth.currentUser, {
      displayName:name,
      photoURL:PhotoURL
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("current User:", currentUser);
    });
    return () => unsubscribe();
  }, []);

  const useInfo = {
    user,
    loading,
    createUser,
    SignIn,
    signOutUser,
    updateProfile
  };

  return (
    <AuthContext.Provider value={useInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
