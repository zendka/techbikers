import React, { memo, useEffect } from "react";
import { Container } from "semantic-ui-react";

import "./style.css";
import { setDocumentTitle } from "../../../helpers";

const PageNotFound = memo(() => {
  useEffect(setDocumentTitle("Page Not Found"));

  return (
    <Container as="main" id="page-not-found">
      <h1>Page not found</h1>
    </Container>
  );
});

export default PageNotFound;
