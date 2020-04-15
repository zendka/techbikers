export function fixDates(ride) {
  if (ride?.startDate) {
    ride.startDate = new Date(ride.startDate);
  }
  if (ride?.endDate) {
    ride.endDate = new Date(ride.endDate);
  }
}
