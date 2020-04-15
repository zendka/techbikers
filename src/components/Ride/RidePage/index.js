import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "./style.css";
import useDocumentTitle from "library/hooks/useDocumentTitle";
import useRide from "../hooks/useRide";
import RideDetailsWithIndicators from "./RideDetails";

export default function RidePage() {
  const { rideId } = useParams();
  const { ride, isLoading, error } = useRide(rideId);

  useDocumentTitle(ride?.name);

  return (
    <Container as="main" id="ride-details-page">
      <RideDetailsWithIndicators {...{ isLoading, error, ...ride }} />
    </Container>
  );
}
