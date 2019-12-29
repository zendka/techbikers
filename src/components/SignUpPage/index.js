import React from "react";
import { Form, Input, Button } from "semantic-ui-react";

import "./style.css";
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
      <Form id="signup-form" onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Email</label>
          <Input
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
        </Form.Field>
        {this.state.error && <div className="error">{this.state.error}</div>}
        <Button type="submit">Sign up</Button>
      </Form>
    );
  }
}

const SignUpForm = withFirebase(SignUpFormBase);
