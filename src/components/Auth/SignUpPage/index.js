import React, { memo, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "./style.css";
import FormWithEmailAndPassword from "../FormWithEmailAndPassword";
import ROUTES from "library/constants/routes";
import ApiContext from "library/network/API";
import useDocumentTitle from "library/hooks/useDocumentTitle";

export default memo(function SignUpPage() {
  const [error, setError] = useState(null);
  const api = useContext(ApiContext);
  const history = useHistory();

  useDocumentTitle("Sign Up");

  const onSubmit = ({ email, password }) => {
    api
      .createUser(email, password)
      .then(authUser => {
        // @todo
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <Container as="main" id="signup-page">
      <h1>Sign Up</h1>
      <FormWithEmailAndPassword {...{ onSubmit, error }} />
    </Container>
  );
});
