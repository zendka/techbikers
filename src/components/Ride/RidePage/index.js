import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "./style.css";
import useDocumentTitle from "library/hooks/useDocumentTitle";
import useRide from "../hooks/useRide";
import RideDetails from "./RideDetails";
import withErrorMessage from "library/hocs/withErrorMessage";
import withLoadingIndicator from "library/hocs/withLoadingIndicator";

export default function RidePage() {
  const { rideId } = useParams();
  const { ride, isLoading, error } = useRide(rideId);

  useDocumentTitle(ride?.name);

  const RideWithIndicators = withLoadingIndicator(
    withErrorMessage(RideDetails)
  );

  return (
    <Container as="main" id="ride-details-page">
      <RideWithIndicators {...{ isLoading, error, ...ride }} />
    </Container>
  );
}
