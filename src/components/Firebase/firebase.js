import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_FB_apiKey,
  authDomain: process.env.REACT_APP_FB_authDomain,
  databaseURL: process.env.REACT_APP_FB_databaseURL,
  projectId: process.env.REACT_APP_FB_projectId,
  storageBucket: process.env.REACT_APP_FB_storageBucket,
  messagingSenderId: process.env.REACT_APP_FB_messagingSenderId,
  functionURL: process.env.REACT_APP_FB_functionURL
};

export default class Firebase {
  constructor() {
    firebase.initializeApp(config);

    this.auth = firebase.auth();
    this.db = firebase.database();
  }

  doCreateUserWithEmailAndPassword(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut() {
    return this.auth.signOut();
  }

  fetchRides = () =>
    new Promise((resolve, reject) => {
      this.db.ref("rides").on("value", snapshot => {
        const rides = Object.values(snapshot.val());
        if (!rides) {
          reject();
          return;
        }

        rides.forEach(ride => {
          ride.startDate = new Date(ride.startDate);
          ride.endDate = new Date(ride.endDate);
        });

        resolve(rides);
      });
    });

  fetchRide(rideId) {
    return new Promise((resolve, reject) => {
      this.db.ref("rides/id_" + rideId).on("value", snapshot => {
        const ride = snapshot.val();
        if (!ride) {
          reject();
          return;
        }

        ride.startDate = new Date(ride.startDate);
        ride.endDate = new Date(ride.endDate);

        resolve(ride);
      });
    });
  }
}
