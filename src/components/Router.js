import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ROUTES from 'library/constants/routes';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './HomePage';
import About from './AboutPage';
import Charity from './CharityPage';
import SignIn from './Auth/SignInPage';
import SignUp from './Auth/SignUpPage';
import RideList from './Ride/RideListPage';
import Ride from './Ride/RidePage';
import PageNotFound from './PageNotFound';

export default function Root() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.ABOUT}>
          <About />
        </Route>
        <Route path={ROUTES.CHARITY}>
          <Charity />
        </Route>

        <Route path={ROUTES.SIGNIN}>
          <SignIn />
        </Route>
        <Route path={ROUTES.SIGNUP}>
          <SignUp />
        </Route>

        <Route path={ROUTES.UPCOMING_RIDES}>
          <RideList />
        </Route>
        <Route path={ROUTES.RIDES}>
          <Ride />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
