import React, { memo } from "react";
import { Container } from "semantic-ui-react";

import "./style.css";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const PageNotFound = memo(() => {
  useDocumentTitle("Page Not Found");

  return (
    <Container as="main" id="page-not-found">
      <h1>Page not found</h1>
    </Container>
  );
});

export default PageNotFound;
