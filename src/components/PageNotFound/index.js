import React, { memo } from 'react';
import { Container } from 'semantic-ui-react';

import './style.css';
import useDocumentTitle from 'library/hooks/useDocumentTitle';

export default memo(function PageNotFound() {
  useDocumentTitle('Page Not Found');

  return (
    <Container as="main" id="page-not-found">
      <h1>Page not found</h1>
    </Container>
  );
});
