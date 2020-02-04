import React, { memo, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Message, Container } from "semantic-ui-react";

import ROUTES from "../../../constants/routes";
import { withFirebase } from "../../Firebase";
import { setDocumentTitle } from "../../../helpers";

const SignInPage = memo(() => {
  useEffect(setDocumentTitle("Sign In"));

  return (
    <Container as="main" id="signin-page">
      <h1>Sign In</h1>
      <SignInForm />
    </Container>
  );
});

const INITIAL_STATE = { email: "", password: "", error: null };

class SignInFormBase extends React.PureComponent {
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
      <Form
        id="signin-form"
        onSubmit={this.onSubmit}
        style={{ maxWidth: "250px", margin: "0 auto" }}
      >
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
        <Button type="submit">Sign in</Button>
      </Form>
    );
  }
}

const SignInForm = withFirebase(withRouter(SignInFormBase));

export default SignInPage;
