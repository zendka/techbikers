const EXPIRATION_DURATION = 1000 * 60 * 60; // 1 hour

export function getCache(key) {
  let cache = localStorage.getItem(key);
  if (!cache) {
    return null;
  }

  try {
    cache = JSON.parse(cache);
  } catch {
    localStorage.removeItem(key);
    return null;
  }

  if (cache.expiryDate && new Date(cache.expiryDate) > new Date()) {
    cache = cache.data;
    cache.startDate = new Date(cache.startDate);
    cache.endDate = new Date(cache.endDate);
    return cache;
  } else {
    localStorage.removeItem(key);
    return null;
  }
}

export function setCache(key, data) {
  const expiryDate = new Date().getTime() + EXPIRATION_DURATION;
  localStorage.setItem(key, JSON.stringify({ data, expiryDate }));
}

export function getRideCache(rideId) {
  return getCache(`ride_${rideId}`);
}

export function setRideCache(rideId, ride) {
  setCache(`ride_${rideId}`, ride);
}
