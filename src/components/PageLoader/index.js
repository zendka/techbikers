import React, { memo } from "react";
import { Loader, Segment } from "semantic-ui-react";

import "./style.css";

const PageLoader = memo(() => (
  <main>
    <Segment basic className="page-loader">
      <Loader active>Loading</Loader>
    </Segment>
  </main>
));

export default PageLoader;
