import React from "react";
import { withFirebase } from "../Firebase";

export class SignOutPage extends React.PureComponent {
  onClick = e => {
    e.preventDefault();
    this.props.firebase.doSignOut();
  };

  render() {
    return (
      <a href="signout" onClick={this.onClick} className={this.props.className}>
        {this.props.children}
      </a>
    );
  }
}

export default withFirebase(SignOutPage);
