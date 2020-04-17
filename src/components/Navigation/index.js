import React, { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Icon, Container } from 'semantic-ui-react';

import './style.css';
import ROUTES from 'library/constants/routes';
import SignOutLink from '../Auth/SignOutLink';
import AuthUserContext from 'library/network/Auth';

export default memo(function Navigation() {
  const authUser = useContext(AuthUserContext);

  return (
    <Menu borderless as="nav" id="main-nav">
      <Container>
        <Menu.Item>
          <Link to={ROUTES.HOME}>
            <Logo />
          </Link>
        </Menu.Item>
        <Menu.Item as={Link} to={ROUTES.HOME}>
          TechBikers
        </Menu.Item>
        <Menu.Item as={Link} to={ROUTES.UPCOMING_RIDES}>
          Rides
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
        {authUser ? (
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
      </Container>
    </Menu>
  );
});

const Logo = memo(() => (
  <img src="/static/img/logo@2x.png" height="58" width="58" alt="bike" />
));
