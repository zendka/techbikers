import React, { memo } from "react";
import { Embed } from "semantic-ui-react";

import "./style.css";

export default memo(function YouTubeVideo({ id }) {
  return (
    <div className="embedded-video">
      <Embed id={id} source="youtube" active />
    </div>
  );
});
