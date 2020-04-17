import React, { createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import { fixDates } from "../../components/Ride/helpers";

const config = {
  apiKey: process.env.REACT_APP_FB_apiKey,
  authDomain: process.env.REACT_APP_FB_authDomain,
  databaseURL: process.env.REACT_APP_FB_databaseURL,
  projectId: process.env.REACT_APP_FB_projectId,
  storageBucket: process.env.REACT_APP_FB_storageBucket,
  messagingSenderId: process.env.REACT_APP_FB_messagingSenderId,
  appId: process.env.REACT_APP_FB_appId,
  measurementId: process.env.REACT_APP_FB_measurementId,
};

class Api {
  constructor() {
    firebase.initializeApp(config);

    this.auth = firebase.auth();
    this.db = firebase.database();
    this.ridesRef = this.db.ref("rides");
  }

  createUser(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.auth.signOut();
  }

  onAuthStateChanged(observer) {
    return this.auth.onAuthStateChanged(observer);
  }

  fetchRides() {
    return this.ridesRef.once("value").then((snapshot) => {
      const rides = Object.values(snapshot.val());
      rides.forEach(fixDates);
      return rides;
    });
  }

  fetchRide(rideId) {
    return this.ridesRef
      .child("id_" + rideId)
      .once("value")
      .then((snapshot) => {
        if (!snapshot.exists()) {
          throw new Error("The ride doesn't exist");
        }

        const ride = snapshot.val();
        fixDates(ride);
        return ride;
      });
  }
}

const ApiContext = new createContext(null);

function ApiProvider({ children }) {
  return (
    <ApiContext.Provider value={new Api()}>{children}</ApiContext.Provider>
  );
}

export default ApiContext;
export { ApiProvider };
