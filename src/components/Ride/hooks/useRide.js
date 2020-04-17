import { useReducer, useEffect, useContext } from "react";

import ApiContext from "library/network/API";
import { setRideCache, getRideCache } from "../helpers/cache";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, ride: action.payload, isLoading: false, error: null };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error();
  }
}

export default function useRide(rideId) {
  const cachedRide = getRideCache(rideId);

  const api = useContext(ApiContext);
  const [state, dispatch] = useReducer(reducer, {
    ride: cachedRide,
    isLoading: cachedRide ? false : true,
    error: null,
  });

  useEffect(() => {
    let wasCanceled = false;

    if (cachedRide) {
      return;
    }

    dispatch({ type: "FETCH_INIT" });

    api
      .fetchRide(rideId)
      .then((ride) => {
        setRideCache(rideId, ride);
        if (!wasCanceled) {
          dispatch({ type: "FETCH_SUCCESS", payload: ride });
        }
      })
      .catch((e) => {
        if (!wasCanceled) {
          dispatch({
            type: "FETCH_ERROR",
            payload: e.message || "Could not load, please try again later",
          });
        }
      });

    return () => (wasCanceled = true);
  }, [rideId, cachedRide, api]);

  return state;
}
