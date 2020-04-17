import React, { memo } from 'react';

import Time from 'library/components/Time';

export default memo(function RideDetails({
  name,
  startDate,
  endDate,
  chapter,
  fullCost,
}) {
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
});
