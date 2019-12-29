import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import "./style.css";
import ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";
import Navigation from "../Navigation";
import SignUpPage from "../SignUpPage";

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
          <Route path={ROUTES.SIGNUP} component={SignUpPage}></Route>
        </main>
      </BrowserRouter>
    );
  }
}

export default withFirebase(App);
