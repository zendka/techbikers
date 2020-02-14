import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { FirebaseContext } from "../Firebase";
import ROUTES from "../../constants/routes";

export default function SignOutLink({ children, ...props }) {
  const firebase = useContext(FirebaseContext);
  const history = useHistory();

  const signOutAndRedirect = e => {
    e.preventDefault();
    firebase.doSignOut().then(() => history.push(ROUTES.HOME));
    // @todo display message to user
    // @todo catch error
  };

  return (
    <a href={ROUTES.HOME} {...props} onClick={signOutAndRedirect}>
      {children}
    </a>
  );
}
