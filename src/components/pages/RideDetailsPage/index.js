import React from "react";
import { withRouter } from "react-router-dom";

import { withFirebase } from "../../Firebase";
import { setDocumentTitle } from "../../../helpers";
import PageLoader from "../../PageLoader";
import PageNotFound from "../PageNotFound";

class RideDetailsPage extends React.Component {
  state = { ride: null, loading: true, loadedSuccessfully: null };

  componentDidMount() {
    const { rideId } = this.props.match.params;

    this.props.firebase
      .fetchRide(rideId)
      .then(ride => {
        this.setState({ loading: false, loadedSuccessfully: true, ride });
      })
      .catch(() =>
        this.setState({ loading: false, loadedSuccessfully: false })
      );

    setDocumentTitle(this.state.ride?.name)();
  }

  componentDidUpdate() {
    setDocumentTitle(this.state.ride?.name)();
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

export default withRouter(withFirebase(RideDetailsPage));
