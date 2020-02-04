import React, { memo, useEffect } from "react";
import { Container } from "semantic-ui-react";

import { setDocumentTitle } from "../../../helpers";
import YouTubeVideo from "../../YouTubeVideo";

const AboutPage = memo(() => {
  useEffect(setDocumentTitle("About"));

  return (
    <Container as="main" id="about-page">
      <article>
        <h1>About TechBikers</h1>

        <p>
          TechBikers was born in 2012 from Google Campus in London as a means
          for the tech community to put down their laptops and pick up a bike to
          support charity, network, share ideas and spread the start-up vibe.
        </p>

        <p>
          Behind TechBikers is Eze Vidra, Partner at Google Ventures (and
          Founder of Google Campus), Benjamin Southworth, ex Deputy CEO at Tech
          City UK, and Abraham Choi, Founder of Decision Analytics and Mark
          Jennings, Founder of Shaken.
        </p>

        <p>
          To date we have ridden 960 km and donated over £170,000 to charity.
        </p>

        <p>
          At its core is a 3 day 320km ride from Paris to London taking 70 mixed
          ability riders on a challenging but safe experience, but it is so much
          more - it is 4 month programme of training rides, group meetings,
          personal fundraising and support that is shared across social media
          and in the press, before, during and after the ride.
        </p>

        <p>
          We apply startup methodologies of agility, programmatic intelligence,
          hard work and great fun to create a unique, effective and transparent
          organisation.
        </p>

        <p>
          To ensure that the maximum amount of money reaches the charity, we
          cover our ride costs with sponsorship, and that presents some
          exciting, and tangible reasons to get involved.
        </p>

        <p>
          To get a flavour of the TechBikers challenge, see this video from the
          2013 ride
        </p>

        <YouTubeVideo id="W-0JHYkoJUI" />
      </article>
    </Container>
  );
});

export default AboutPage;
