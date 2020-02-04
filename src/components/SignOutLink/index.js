import React from "react";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../Firebase";
import ROUTES from "../../constants/routes";

class SignOutLink extends React.PureComponent {
  signOutAndRedirect = e => {
    e.preventDefault();
    this.props.firebase
      .doSignOut()
      .then(() => this.props.history.push(ROUTES.HOME));
    // @todo display message to user
    // @todo catch error
  };

  render() {
    return (
      <a
        href="signout"
        onClick={this.signOutAndRedirect}
        className={this.props.className}
      >
        {this.props.children}
      </a>
    );
  }
}

export default withRouter(withFirebase(SignOutLink));
