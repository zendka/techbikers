import React, { useState, useEffect, useContext, createContext } from "react";

import ApiContext from "library/network/API";

const AuthUserContext = createContext();

function AuthUserProvider({ children }) {
  const api = useContext(ApiContext);
  const authUser = useAuthentication(api);

  return (
    <AuthUserContext.Provider value={authUser}>
      {children}
    </AuthUserContext.Provider>
  );
}

function useAuthentication(api) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(
    () =>
      api.onAuthStateChanged(authUser => {
        authUser ? setAuthUser(authUser) : setAuthUser(null);
      }),
    [api]
  );

  return authUser;
}

export default AuthUserContext;
export { AuthUserProvider };
