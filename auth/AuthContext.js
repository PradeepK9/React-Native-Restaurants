import React, { createContext, useState, useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import auth from "./firebase"; 

// Create the AuthContext
export const AuthContext = createContext();

// Create an AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  console.log("AuthContext : Creating AuthProvider");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Add an observer to listen for changes in the user's authentication status
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
