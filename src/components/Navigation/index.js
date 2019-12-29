import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import ROUTES from "../../constants/routes";

const Navigation = props =>
  props.user ? <NavigationAuth /> : <NavigationNonAuth />;

const NavigationAuth = () => (
  <Menu>
    <Menu.Item>
      <Link to={ROUTES.HOME}>Home</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={ROUTES.SIGNOUT}>Sign Out</Link>
    </Menu.Item>
  </Menu>
);

const NavigationNonAuth = () => (
  <Menu>
    <Menu.Item>
      <Link to={ROUTES.HOME}>Home</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={ROUTES.SIGNUP}>Sign Up</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={ROUTES.SIGNIN}>Sign In</Link>
    </Menu.Item>
  </Menu>
);

export default Navigation;
