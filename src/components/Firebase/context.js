import React from "react";

const FirebaseContext = new React.createContext(null);

export default FirebaseContext;

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component firebase={firebase} />}
  </FirebaseContext.Consumer>
);
