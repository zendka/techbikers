import React, { useState, useEffect, useContext, createContext } from "react";

import { FirebaseContext } from "../Firebase";

const AuthUserContext = createContext();

function AuthUserProvider({ children }) {
  const firebase = useContext(FirebaseContext);
  const authUser = useAuthentication(firebase);

  return (
    <AuthUserContext.Provider value={authUser}>
      {children}
    </AuthUserContext.Provider>
  );
}

function useAuthentication(firebase) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unlisten = firebase.auth.onAuthStateChanged(authUser => {
      authUser ? setAuthUser(authUser) : setAuthUser(null);
    });
    return () => {
      unlisten();
    };
  }, [firebase]);

  return authUser;
}

export default AuthUserContext;
export { AuthUserProvider };
