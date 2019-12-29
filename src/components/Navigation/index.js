import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "../../constants/routes";

const Navigation = props => (
  <nav>{props.user ? <NavigationAuth /> : <NavigationNonAuth />}</nav>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGNOUT}>Sign Out</Link>
    </li>
  </ul>
);

const NavigationNonAuth = () => (
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
);

export default Navigation;
