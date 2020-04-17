import React from 'react';
import { Message } from 'semantic-ui-react';

export default function (Component) {
  return function withErrorMessage({ error, ...props }) {
    return error ? (
      <Message negative>{error}</Message>
    ) : (
      <Component {...props} />
    );
  };
}
