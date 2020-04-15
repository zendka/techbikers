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
  functionURL: process.env.REACT_APP_FB_functionURL,
};

class Api {
  constructor() {
    firebase.initializeApp(config);

    this.auth = firebase.auth();
    this.db = firebase.database();
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
    return new Promise((resolve, reject) => {
      this.db
        .ref("rides")
        .once("value")
        .then((snapshot) => {
          if (!snapshot.exists()) {
            reject();
            return;
          }

          const rides = Object.values(snapshot.val());
          rides.forEach(fixDates);
          resolve(rides);
        })
        .catch(() => {
          reject();
        });
    });
  }

  fetchRide(rideId) {
    return new Promise((resolve, reject) => {
      this.db
        .ref("rides/id_" + rideId)
        .once("value")
        .then((snapshot) => {
          if (!snapshot.exists()) {
            reject();
            return;
          }

          const ride = snapshot.val();
          fixDates(ride);
          resolve(ride);
        })
        .catch(() => {
          reject();
        });
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
