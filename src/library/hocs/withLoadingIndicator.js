import React from 'react';
import PageLoader from 'library/components/PageLoader';

export default function (Component) {
  return function withLoadingIndicator({ isLoading, ...props }) {
    return isLoading ? <PageLoader /> : <Component {...props} />;
  };
}
