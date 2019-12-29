import React from "react";

import { withFirebase } from "../Firebase";

export default class SignUpPage extends React.Component {
  render() {
    return (
      <div id="signup-page">
        <h1>Sign Up</h1>
        <SignUpForm />
      </div>
    );
  }
}

class SignUpFormBase extends React.Component {
  state = { email: "", password: "", error: null };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.firebase
      .doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(authUser => {})
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <form id="signup-form" onSubmit={this.onSubmit}>
        <label htmlFor="signup-form-email">Email</label>
        <input
          type="text"
          name="email"
          id="signup-form-email"
          value={this.state.email}
          onChange={this.onChange}
        />
        <label htmlFor="signup-form-password">Password</label>
        <input
          type="password"
          name="password"
          id="signup-form-password"
          value={this.state.password}
          onChange={this.onChange}
        />
        {this.state.error && <div className="error">{this.state.error}</div>}
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

const SignUpForm = withFirebase(SignUpFormBase);
