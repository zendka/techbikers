import React, { memo, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "./style.css";
import FormWithEmailAndPassword from "../FormWithEmailAndPassword";
import ROUTES from "library/constants/routes";
import ApiContext from "library/network/API";
import useDocumentTitle from "library/hooks/useDocumentTitle";

export default memo(function SignInPage() {
  const [error, setError] = useState(null);
  const api = useContext(ApiContext);
  const history = useHistory();

  useDocumentTitle("Sign In");

  const onSubmit = ({ email, password }) => {
    api
      .signIn(email, password)
      .then(response => {
        // @todo set global user context
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <Container as="main" id="signin-page">
      <h1>Sign In</h1>
      <FormWithEmailAndPassword {...{ onSubmit, error, text: "Sign In" }} />
    </Container>
  );
});
