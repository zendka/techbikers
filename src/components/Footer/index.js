import React, { memo } from "react";

import "./style.css";

const Footer = memo(() => (
  <footer id="footer">
    <div className="content">
      <p>
        <a href="mailto:hello@techbikers.com">hello@techbikers.com</a>
        <br />
        4-5 Bonhill Street
        <br />
        London
        <br />
        EC2A 4BX
      </p>

      <p>
        <a
          href="http://www.facebook.com/techbikers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{" "}
        ·{" "}
        <a
          href="http://twitter.com/techbikers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </p>
    </div>
  </footer>
));

export default Footer;
