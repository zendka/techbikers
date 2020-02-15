import React from "react";
import PageLoader from "../PageLoader";

export default function(Component) {
  return function withLoadingIndicator({ isLoading, ...props }) {
    return isLoading ? <PageLoader /> : <Component {...props} />;
  };
}
