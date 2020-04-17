import { useState, useEffect, useContext } from "react";

import ApiContext from "library/network/API";

export default function useRides() {
  const api = useContext(ApiContext);
  const [state, setState] = useState({
    rides: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    api
      .fetchRides()
      .then((rides) => setState({ isLoading: false, error: null, rides }))
      .catch((e) =>
        setState({
          isLoading: false,
          error: "Could not load, please try again later",
        })
      );
  }, [api]);

  return state;
}
