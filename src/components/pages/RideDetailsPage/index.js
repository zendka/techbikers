import React, { memo, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container } from "semantic-ui-react";

import useDocumentTitle from "../../../hooks/useDocumentTitle";
import withErrorMessage from "../../hocs/withErrorMessage";
import withLoadingIndicator from "../../hocs/withLoadingIndicator";
import ApiContext from "../../Api";
import Time from "../../Time";

export default function RideDetailsPage() {
  const { rideId } = useParams();
  const { ride, isLoading, error } = useRide(rideId);

  useDocumentTitle(ride?.name);

  return (
    <Container as="main" id="ride-details-page">
      <RideDetailsWithIndicators {...{ isLoading, error, ...ride }} />
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

const RideDetailsWithIndicators = withLoadingIndicator(
  withErrorMessage(RideDetails)
);

function useRide(rideId) {
  const [state, setState] = useState({
    ride: null,
    isLoading: true,
    error: null
  });

  const api = useContext(ApiContext);

  useEffect(() => {
    api
      .fetchRide(rideId)
      .then(ride => setState({ isLoading: false, error: null, ride }))
      .catch(() =>
        setState({
          isLoading: false,
          error: "Could not load, please try again later"
        })
      );
  }, [rideId, api]);

  return state;
}
