import React from "react";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";

import ROUTES from "../../../constants/routes";
import { withFirebase } from "../../Firebase";

class RidesPage extends React.Component {
  state = { rides: [], upcomingRides: [], pastRides: [] };

  componentDidMount() {
    this.props.firebase.fetchRides().then(this.updateRides);
  }

  updateRides = rides => {
    const now = new Date();
    const upcomingRides = rides
      .filter(ride => ride.startDate > now)
      .sort((r1, r2) => r1.endDate - r2.endDate); // sort by closest to the present first
    const pastRides = rides
      .filter(ride => ride.startDate <= now)
      .sort((r1, r2) => r2.endDate - r1.endDate); // sort by closest to the present first

    this.setState({ rides, upcomingRides, pastRides });
  };

  render() {
    return (
      <main id="upcoming-rides-page">
        <h1>Upcoming Rides</h1>
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
      <Item.Group>
        {this.props.rides.map(ride => (
          <Item key={ride.id}>
            <Item.Content>
              <Item.Header as={Link} to={ROUTES.RIDES.replace(/:\w+/, ride.id)}>
                {ride.name}
              </Item.Header>
              <Item.Meta>
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
              </Item.Meta>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    );
  }
}

export default withFirebase(RidesPage);
