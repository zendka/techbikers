import { useReducer, useEffect, useContext } from "react";
import ApiContext from "library/network/API";
import { setRideCache, getRideCache } from "../helpers/cache";

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

export default function useRide(rideId) {
  const cachedRide = getRideCache(rideId);

  const api = useContext(ApiContext);
  const [state, dispatch] = useReducer(reducer, {
    ride: cachedRide,
    isLoading: cachedRide ? false : true,
    error: null
  });

  useEffect(() => {
    if (cachedRide) {
      return;
    }

    api
      .fetchRide(rideId)
      .then(ride => {
        dispatch({ type: "success", load: ride });
        setRideCache(rideId, ride);
      })
      .catch(() =>
        dispatch({
          type: "error",
          load: "Could not load, please try again later"
        })
      );
  }, [rideId, cachedRide, api]);

  return state;
}
