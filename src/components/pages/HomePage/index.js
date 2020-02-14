import React, { memo } from "react";
import { Form, Container, Statistic } from "semantic-ui-react";

import "./style.css";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

export default memo(function HomePage() {
  useDocumentTitle();

  return (
    <Container as="main" id="home-page">
      <Hero />
      <Mission />
      <Stats />
      <MailchimpForm />
    </Container>
  );
});

// @todo optimise image size! and optimise for @media mobile
const Hero = () => (
  <section id="hero">
    <p>
      <b>Drop</b>your laptop & get on your<b>bike</b>
    </p>
  </section>
);

const Mission = () => (
  <section id="mission">
    <h2>Our Mission</h2>

    <p>
      Techbikers is a collaboration of the London tech startup community to help
      children in need by supporting literacy charity Room to Read. Since 2012
      over 300 tech professionals – including start-ups, venture capitalists and
      executives have cycled 960km in three Paris to London rides to raise money
      for this fantastic charity.
    </p>
  </section>
);

const Stats = () => (
  <section id="stats">
    <h2>Stats to Date</h2>

    <Statistic.Group widths="1">
      <Statistic>
        <Statistic.Value>365</Statistic.Value>
        <Statistic.Label>cyclists</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>£304,000</Statistic.Value>
        <Statistic.Label>raised since 2012</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>1600km</Statistic.Value>
        <Statistic.Label>ridden</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </section>
);

const MailchimpForm = () => (
  <section id="mailchimp">
    <h2>Learn more about our plans for 2020!</h2>

    <Form
      action="//techbikers.us7.list-manage.com/subscribe/post?u=b99427a37520d53bd953e6e7c&amp;id=85462469df"
      method="post"
      target="_blank"
    >
      <Form.Input type="email" name="EMAIL" placeholder="Your email address" />
      <input
        style={{ position: "absolute", left: "-5000px" }}
        type="text"
        name="b_b99427a37520d53bd953e6e7c_85462469df"
        tabIndex="-1"
        defaultValue=""
      />
      <Form.Button type="submit" name="subscribe" color="olive">
        Subscribe
      </Form.Button>
    </Form>
  </section>
);
