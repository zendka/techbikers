import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "./style.css";
import useDocumentTitle from "library/hooks/useDocumentTitle";
import withErrorMessage from "library/hocs/withErrorMessage";
import withLoadingIndicator from "library/hocs/withLoadingIndicator";
import Time from "library/components/Time";
import useRide from "../hooks/useRide";

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
      <div className="metadata">
        <Time date={startDate} /> to <Time date={endDate} />
        <p>Part of chapter {chapter}</p>
        <p>Full cost: {fullCost}</p>
      </div>
    </>
  );
};
RideDetails = memo(RideDetails);

const RideDetailsWithIndicators = withLoadingIndicator(
  withErrorMessage(RideDetails)
);
