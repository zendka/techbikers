import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import ApiContext from "library/network/API";
import ROUTES from "library/constants/routes";

export default function SignOutLink({ children, ...props }) {
  const api = useContext(ApiContext);
  const history = useHistory();

  const signOutAndRedirect = e => {
    e.preventDefault();
    api.signOut().then(() => history.push(ROUTES.HOME));
    // @todo display message to user
    // @todo catch error
  };

  return (
    <a href={ROUTES.HOME} {...props} onClick={signOutAndRedirect}>
      {children}
    </a>
  );
}
