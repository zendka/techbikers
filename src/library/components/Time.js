import React, { memo } from 'react';

export default memo(function Time({ date }) {
  return (
    <time>
      {date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
    </time>
  );
});
