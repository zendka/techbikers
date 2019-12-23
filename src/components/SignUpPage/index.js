import React from "react";

export default class SignUpPage extends React.Component {
  render() {
    return (
      <div id="signup-page">
        <h1>SignUpPage</h1>
        <SignUpForm />
      </div>
    );
  }
}

class SignUpForm extends React.Component {
  render() {
    return (
      <div id="signup-form">
        <label htmlFor="signup-form-email">Email</label>
        <input type="text" name="email" id="signup-form-email" />
        <label htmlFor="signup-form-password">Password</label>
        <input type="password" name="password" id="signup-form-password" />
      </div>
    );
  }
}
