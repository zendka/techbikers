import { fixDates } from '.';

const EXPIRATION_DURATION = 1000 * 60 * 60; // 1 hour

export function getCache(key) {
  try {
    const cache = JSON.parse(localStorage.getItem(key));
    if (!cache.expiryDate || new Date(cache.expiryDate) < new Date()) {
      throw new Error();
    }
    return cache.data;
  } catch {
    localStorage.removeItem(key);
    return null;
  }
}

export function setCache(key, data) {
  const expiryDate = new Date().getTime() + EXPIRATION_DURATION;
  localStorage.setItem(key, JSON.stringify({ data, expiryDate }));
}

export function removeCache(key) {
  localStorage.removeItem(key);
}

export function getRideCache(rideId) {
  const ride = getCache(getRideCacheId(rideId));
  fixDates(ride);
  return ride;
}

export function setRideCache(rideId, ride) {
  setCache(getRideCacheId(rideId), ride);
}

export function removeRideCache(rideId) {
  removeCache(getRideCacheId(rideId));
}

function getRideCacheId(rideId) {
  return `ride_${rideId}`;
}
