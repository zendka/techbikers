import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ROUTES from "../../constants/routes";
import { FirebaseContext } from "../Firebase";
import Navigation from "../Navigation";
import Footer from "../Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CharityPage from "../pages/CharityPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import RidesPage from "../pages/RidesPage";
import RideDetailsPage from "../pages/RideDetailsPage";
import PageNotFound from "../pages/PageNotFound";
import UserContext from "../User";

export default function App() {
  const firebase = useContext(FirebaseContext);
  const authUser = useAuthentication(firebase);

  return (
    <BrowserRouter>
      <UserContext.Provider value={authUser}>
        <Navigation />
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <HomePage />
          </Route>
          <Route path={ROUTES.UPCOMING_RIDES}>
            <RidesPage />
          </Route>
          <Route path={ROUTES.ABOUT}>
            <AboutPage />
          </Route>
          <Route path={ROUTES.CHARITY}>
            <CharityPage />
          </Route>
          <Route path={ROUTES.SIGNIN}>
            <SignInPage />
          </Route>

          <Route path={ROUTES.SIGNUP}>
            <SignUpPage />
          </Route>
          <Route path={ROUTES.RIDES}>
            <RideDetailsPage />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
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
