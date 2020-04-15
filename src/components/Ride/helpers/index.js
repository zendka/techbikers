export function fixDates(ride) {
  ride.startDate = new Date(ride.startDate);
  ride.endDate = new Date(ride.endDate);
}
