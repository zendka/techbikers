import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Message } from "semantic-ui-react";

import ROUTES from "../../../constants/routes";
import { withFirebase } from "../../Firebase";

export default class SignUpPage extends React.Component {
  render() {
    return (
      <main id="signup-page">
        <h1>Sign Up</h1>
        <SignUpForm />
      </main>
    );
  }
}

const INITIAL_STATE = { email: "", password: "", error: null };

class SignUpFormBase extends React.Component {
  state = INITIAL_STATE;

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.firebase
      .doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(authUser => {
        this.setState(INITIAL_STATE);
        this.props.history.push(ROUTES.HOME);
      })
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
            type="email"
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
        {this.state.error && <Message negative>{this.state.error}</Message>}
        <Button type="submit">Sign up</Button>
      </Form>
    );
  }
}

const SignUpForm = withFirebase(withRouter(SignUpFormBase));
