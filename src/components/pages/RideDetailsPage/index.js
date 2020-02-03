import React from "react";

import { withFirebase } from "../../Firebase";
import { setDocumentTitle } from "../../../helpers";
import PageLoader from "../../PageLoader";
import PageNotFound from "../PageNotFound";

class RideDetailsPage extends React.Component {
  state = { ride: null, loading: true, loadedSuccessfully: null };

  componentDidMount() {
    const rideId = this.props.match.params.rideId;

    this.props.firebase
      .fetchRide(rideId)
      .then(ride =>
        this.setState({ ride, loading: false, loadedSuccessfully: true })
      )
      .catch(() =>
        this.setState({ loading: false, loadedSuccessfully: false })
      );

    setDocumentTitle(this.state.ride ? this.state.ride.name : null)();
  }

  componentDidUpdate() {
    setDocumentTitle(this.state.ride ? this.state.ride.name : null)();
  }

  render() {
    if (this.state.loading) {
      return <PageLoader />;
    } else if (!this.state.loadedSuccessfully) {
      return <PageNotFound />;
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
