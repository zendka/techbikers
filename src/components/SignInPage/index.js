import React from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button } from "semantic-ui-react";

import "./style.css";
import ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";

export default class SignInPage extends React.Component {
  render() {
    return (
      <div id="signin-page">
        <h1>Sign In</h1>
        <SignInForm />
      </div>
    );
  }
}

const INITIAL_STATE = { email: "", password: "", error: null };

class SignInFormBase extends React.Component {
  state = INITIAL_STATE;

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.firebase
      .doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(response => {
        this.setState(INITIAL_STATE);
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <Form id="signin-form" onSubmit={this.onSubmit}>
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
        {this.state.error && <div className="error">{this.state.error}</div>}
        <Button type="submit">Sign in</Button>
      </Form>
    );
  }
}

const SignInForm = withFirebase(withRouter(SignInFormBase));
