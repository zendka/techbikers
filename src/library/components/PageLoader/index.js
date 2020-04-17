import React, { memo } from 'react';
import { Loader, Segment } from 'semantic-ui-react';

import './style.css';

export default memo(function PageLoader() {
  return (
    <Segment basic className="page-loader">
      <Loader active>Loading</Loader>
    </Segment>
  );
});
