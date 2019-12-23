import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from "../Navigation";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
  }
}
