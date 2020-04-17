import React, { memo } from 'react';

import './style.css';

export default memo(function Footer() {
  return (
    <footer id="footer">
      <Contact />
      <SocialLinks />
    </footer>
  );
});

function Contact() {
  return (
    <p>
      <a href="mailto:hello@techbikers.com">hello@techbikers.com</a>
      <br />
      4-5 Bonhill Street
      <br />
      London
      <br />
      EC2A 4BX
    </p>
  );
}

function SocialLinks() {
  const links = [
    { name: 'Facebook', href: 'http://www.facebook.com/techbikers' },
    { name: 'Twitter', href: 'http://twitter.com/techbikers' },
  ];

  return (
    <p id="social-links">
      {links.map(({ name, href }, key) => (
        <a {...{ key, href }} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      ))}
    </p>
  );
}
