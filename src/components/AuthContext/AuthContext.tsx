import React, { useState, createContext, useEffect } from "react";
import { auth } from "../../config/config";
import { onAuthStateChanged } from "firebase/auth";

interface AuthContextType {
  authed: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  const [authed, setAuthed] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ authed }}>{children}</AuthContext.Provider>
    </>
  );
};

export { AuthContext };
