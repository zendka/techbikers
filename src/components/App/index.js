import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import "./style.css";
import ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";
import Navigation from "../Navigation";
import Footer from "../Footer";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import UpcomingRidesPage from "../pages/UpcomingRidesPage";
import RideDetailsPage from "../pages/RideDetailsPage";

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
        <main>
          <Route exact path={ROUTES.HOME} component={HomePage}></Route>
          <Route path={ROUTES.SIGNUP} component={SignUpPage}></Route>
          <Route path={ROUTES.SIGNIN} component={SignInPage}></Route>
          <Route
            path={ROUTES.UPCOMING_RIDES}
            component={UpcomingRidesPage}
          ></Route>
          <Route path={ROUTES.RIDES} component={RideDetailsPage}></Route>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default withFirebase(App);
