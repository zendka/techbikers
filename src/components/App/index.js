import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";
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

class App extends React.Component {
  state = { user: null };

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Navigation user={this.state.user} />
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomePage}></Route>
          <Route path={ROUTES.UPCOMING_RIDES} component={RidesPage}></Route>
          <Route path={ROUTES.ABOUT} component={AboutPage}></Route>
          <Route path={ROUTES.CHARITY} component={CharityPage}></Route>
          <Route path={ROUTES.SIGNIN} component={SignInPage}></Route>

          <Route path={ROUTES.SIGNUP} component={SignUpPage}></Route>
          <Route path={ROUTES.RIDES} component={RideDetailsPage}></Route>
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default withFirebase(App);
