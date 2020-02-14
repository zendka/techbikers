import React, { memo, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Message } from "semantic-ui-react";

import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { FirebaseContext } from "../../Firebase";
import PageLoader from "../../PageLoader";
import Time from "../../Time/Time";

export default function RideDetailsPage() {
  const { rideId } = useParams();
  const { ride, hasLoaded, success } = useRide(rideId);

  useDocumentTitle(ride?.name);

  return (
    <Container as="main" id="ride-details-page">
      {!hasLoaded && <PageLoader />}

      {hasLoaded && !success && (
        <Message negative>Could not load rides, please try again later</Message>
      )}

      {hasLoaded && success && <RideDetails {...ride} />}
    </Container>
  );
}

let RideDetails = function({ name, startDate, endDate, chapter, fullCost }) {
  return (
    <>
      <h1>{name}</h1>
      <Time date={startDate} /> to <Time date={endDate} />
      <p>Part of chapter {chapter}</p>
      <p>Full cost: {fullCost}</p>
    </>
  );
};
RideDetails = memo(RideDetails);

function useRide(rideId) {
  const [state, setState] = useState({
    ride: null,
    hasLoaded: false,
    success: null
  });

  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .fetchRide(rideId)
      .then(ride => setState({ hasLoaded: true, success: true, ride }))
      .catch(() => setState({ hasLoaded: true, success: false }));
  }, [rideId, firebase]);

  return state;
}
