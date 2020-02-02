import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Icon } from "semantic-ui-react";

import "./style.css";
import ROUTES from "../../constants/routes";
import SignOutLink from "../SignOutLink";

const Navigation = props => (
  <Menu borderless as="nav" id="main-nav">
    <Menu.Item>
      <Link to={ROUTES.HOME}>
        <img src="/static/img/logo@2x.png" height="58" width="58" alt="bike" />
      </Link>
    </Menu.Item>
    <Menu.Item as={Link} to={ROUTES.HOME}>
      TechBikers
    </Menu.Item>
    <Menu.Item as={Link} to={ROUTES.UPCOMING_RIDES}>
      Upcoming Rides
    </Menu.Item>
    <Menu.Item as={Link} to={ROUTES.ABOUT}>
      About
    </Menu.Item>
    <Menu.Item as={Link} to={ROUTES.CHARITY}>
      Charity
    </Menu.Item>
    <Menu.Item href="https://medium.com/@techbikers" target="_blank">
      Blog
    </Menu.Item>
    {props.user ? (
      <Menu.Item as={SignOutLink}>Sign Out</Menu.Item>
    ) : (
      <Menu.Item as={Link} to={ROUTES.SIGNIN}>
        Sign In
      </Menu.Item>
    )}
    <Menu text floated="right">
      <Menu.Item>
        <Button as={Link} to={ROUTES.DONATE} color="olive" icon>
          <Icon name="heart" /> Donate
        </Button>
      </Menu.Item>
    </Menu>
  </Menu>
);

export default Navigation;
