import React from "react";
import { withFirebase } from "../Firebase";

export class SignOutPage extends React.Component {
  onClick = e => {
    e.preventDefault();
    this.props.firebase.doSignOut();
  };
  render() {
    return (
      <a href="signout" onClick={this.onClick}>
        Sign Out
      </a>
    );
  }
}

export default withFirebase(SignOutPage);
