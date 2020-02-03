import React from "react";

import { withFirebase } from "../../Firebase";
import { setDocumentTitle } from "../../../helpers";

class RideDetailsPage extends React.Component {
  state = { ride: null };

  componentDidMount() {
    const rideId = this.props.match.params.rideId;

    this.props.firebase.fetchRide(rideId).then(this.updateRide);
    // TODO handle reject

    setDocumentTitle(this.state.ride ? this.state.ride.name : null)();
  }

  componentDidUpdate() {
    setDocumentTitle(this.state.ride ? this.state.ride.name : null)();
  }

  updateRide = ride => {
    this.setState({ ride });
  };

  render() {
    if (!this.state.ride) {
      return null;
    }

    const { name, startDate, endDate, fullCost, chapter } = this.state.ride;
    return (
      <main id="ride-details-page">
        <h1>{name}</h1>
        <time>
          {startDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short"
          })}
        </time>{" "}
        to{" "}
        <time>
          {endDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
          })}
        </time>
        <p>Part of chapter {chapter}</p>
        <p>Full cost: {fullCost}</p>
      </main>
    );
  }
}

export default withFirebase(RideDetailsPage);
