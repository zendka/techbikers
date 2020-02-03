import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

import "./style.css";
import ROUTES from "../../../constants/routes";
import { withFirebase } from "../../Firebase";
import { setDocumentTitle } from "../../../helpers";
import PageLoader from "../../PageLoader";
import PageNotFound from "../PageNotFound";

class RidesPage extends React.Component {
  state = {
    rides: [],
    upcomingRides: [],
    pastRides: [],
    loading: true,
    loadedSuccessfully: null
  };

  componentDidMount() {
    this.props.firebase
      .fetchRides()
      .then(this.updateRides)
      .catch(() =>
        this.setState({ loading: false, loadedSuccessfully: false })
      );

    setDocumentTitle("Rides")();
  }

  componentDidUpdate() {
    setDocumentTitle("Rides")();
  }

  updateRides = rides => {
    const now = new Date();
    const upcomingRides = rides
      .filter(ride => ride.startDate > now)
      .sort((r1, r2) => r1.endDate - r2.endDate); // sort by closest to the present first
    const pastRides = rides
      .filter(ride => ride.startDate <= now)
      .sort((r1, r2) => r2.endDate - r1.endDate); // sort by closest to the present first

    this.setState({
      rides,
      upcomingRides,
      pastRides,
      loading: false,
      loadedSuccessfully: true
    });
  };

  render() {
    if (this.state.loading) {
      return <PageLoader />;
    } else if (!this.state.loadedSuccessfully) {
      return <PageNotFound />;
    }

    return (
      <main id="rides-page">
        <h1>Upcoming & Current Rides</h1>
        <RidesList rides={this.state.upcomingRides} />

        <h2>Past Rides</h2>
        <RidesList rides={this.state.pastRides} />
      </main>
    );
  }
}

class RidesList extends React.Component {
  render() {
    return (
      <Card.Group>
        {this.props.rides.map(ride => (
          <Card
            fluid
            key={ride.id}
            as={Link}
            to={ROUTES.RIDES.replace(/:\w+/, ride.id)}
          >
            <Card.Content>
              <Card.Header>{ride.name}</Card.Header>
              <Card.Meta>
                <time>
                  {ride.startDate.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })}
                </time>
                to{" "}
                <time>
                  {ride.endDate.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                  })}
                </time>
              </Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    );
  }
}

export default withFirebase(RidesPage);
