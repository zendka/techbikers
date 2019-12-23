import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ROUTES from "../../constants/routes";
import Navigation from "../Navigation";
import SignUpPage from "../SignUpPage";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <main>
          <Route path={ROUTES.SIGNUP} component={SignUpPage}></Route>
        </main>
      </BrowserRouter>
    );
  }
}
