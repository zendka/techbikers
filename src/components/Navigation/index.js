import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "../../constants/routes";

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGNUP}>Sign Up</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGNIN}>Sign In</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
