import React, { memo, useReducer, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "./style.css";
import useDocumentTitle from "library/hooks/useDocumentTitle";
import withErrorMessage from "library/hocs/withErrorMessage";
import withLoadingIndicator from "library/hocs/withLoadingIndicator";
import ApiContext from "library/network/API";
import Time from "library/components/Time";

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

function useRide(rideId) {
  const [state, dispatch] = useReducer(reducer, {
    ride: null,
    isLoading: true,
    error: null
  });

  function reducer(state, action) {
    switch (action.type) {
      case "success":
        return { isLoading: false, ride: action.load };
      case "error":
        return { isLoading: false, error: action.load };
      default:
        return state;
    }
  }

  const api = useContext(ApiContext);

  useEffect(() => {
    api
      .fetchRide(rideId)
      .then(ride => dispatch({ type: "success", load: ride }))
      .catch(() =>
        dispatch({
          type: "error",
          load: "Could not load, please try again later"
        })
      );
  }, [rideId, api]);

  return state;
}
