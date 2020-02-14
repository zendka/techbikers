import React, { memo, useState, useEffect, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Message } from "semantic-ui-react";

import "./style.css";
import ROUTES from "../../../constants/routes";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import ApiContext from "../../Api";
import PageLoader from "../../PageLoader";
import Time from "../../Time/Time";

export default memo(function RidesPage() {
  useDocumentTitle("Rides");

  const { rides, hasLoaded, success } = useRides();

  let upcomingRides = useMemo(() => {
    const now = new Date();
    return rides
      .filter(ride => ride.startDate > now)
      .sort((r1, r2) => r1.endDate - r2.endDate); // sort by closest to the present first
  }, [rides]);

  let pastRides = useMemo(() => {
    const now = new Date();
    return rides
      .filter(ride => ride.startDate <= now)
      .sort((r1, r2) => r2.endDate - r1.endDate); // sort by closest to the present first
  }, [rides]);

  return (
    <Container as="main" id="rides-page">
      <h1>Upcoming & Current Rides</h1>

      {!hasLoaded && <PageLoader />}

      {hasLoaded && !success && (
        <Message negative>Could not load rides, please try again later</Message>
      )}

      {hasLoaded && success && (
        <>
          <RidesList rides={upcomingRides} noRidesMessage="Stay tuned" />
          <h2>Past Rides</h2>
          <RidesList rides={pastRides} />
        </>
      )}
    </Container>
  );
});

let RidesList = function({ rides, noRidesMessage }) {
  if (!rides || rides.length === 0) {
    return <p>{noRidesMessage}</p>;
  }

  return (
    <Card.Group>
      {rides.map(ride => (
        <Card
          fluid
          key={ride.id}
          as={Link}
          to={ROUTES.RIDES.replace(/:\w+/, ride.id)}
        >
          <Card.Content>
            <Card.Header>{ride.name}</Card.Header>
            <Card.Meta>
              <Time date={ride.startDate} /> to <Time date={ride.endDate} />
            </Card.Meta>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};
RidesList = memo(RidesList);

function useRides() {
  const api = useContext(ApiContext);
  const [state, setState] = useState({
    rides: [],
    hasLoaded: false,
    success: null
  });

  useEffect(() => {
    api
      .fetchRides()
      .then(rides => setState({ hasLoaded: true, success: true, rides }))
      .catch(() => setState({ hasLoaded: true, success: false }));
  }, [api]);

  return state;
}
