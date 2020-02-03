import React from "react";
import { Embed } from "semantic-ui-react";

import "./style.css";

const YouTubeVideo = ({ id }) => (
  <div className="embedded-video">
    <Embed id={id} source="youtube" active />
  </div>
);

export default YouTubeVideo;
