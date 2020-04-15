import React, { memo } from "react";

import withErrorMessage from "library/hocs/withErrorMessage";
import withLoadingIndicator from "library/hocs/withLoadingIndicator";
import Time from "library/components/Time";

let RideDetails = function ({ name, startDate, endDate, chapter, fullCost }) {
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

export default RideDetailsWithIndicators;
