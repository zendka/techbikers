import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "semantic-ui-react";

import "./style.css";
import useRides from "../hooks/useRides";
import ROUTES from "library/constants/routes";
import useDocumentTitle from "library/hooks/useDocumentTitle";
import withErrorMessage from "library/hocs/withErrorMessage";
import withLoadingIndicator from "library/hocs/withLoadingIndicator";
import Time from "library/components/Time";

export default memo(function RidesPage() {
  useDocumentTitle("Rides");

  const { rides, isLoading, error } = useRides();

  let upcomingRides = useMemo(() => {
    const now = new Date();
    return rides
      .filter((ride) => ride.startDate > now)
      .sort((r1, r2) => r1.endDate - r2.endDate); // sort by closest to the present first
  }, [rides]);

  let pastRides = useMemo(() => {
    const now = new Date();
    return rides
      .filter((ride) => ride.startDate <= now)
      .sort((r1, r2) => r2.endDate - r1.endDate); // sort by closest to the present first
  }, [rides]);

  return (
    <Container as="main" id="rides-page">
      <RidesWithIndicators
        {...{ isLoading, error, upcomingRides, pastRides }}
      />
    </Container>
  );
});

let RidesList = function ({ rides, noRidesMessage }) {
  if (!rides || rides.length === 0) {
    return <p>{noRidesMessage}</p>;
  }

  return (
    <Card.Group>
      {rides.map((ride) => (
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

let Rides = function ({ upcomingRides, pastRides }) {
  return (
    <>
      <h1>Upcoming & Current Rides</h1>
      <RidesList rides={upcomingRides} noRidesMessage="Stay tuned" />
      <h2>Past Rides</h2>
      <RidesList rides={pastRides} />
    </>
  );
};

const RidesWithIndicators = withErrorMessage(withLoadingIndicator(Rides));
