import React, { memo } from "react";
import { withFirebase } from "../Firebase";

const onClick = api => e => {
  e.preventDefault();
  api.doSignOut();
};

const SignOutPage = memo(({ children, className, firebase }) => (
  <a href="signout" onClick={onClick(firebase)} className={className}>
    {children}
  </a>
));

export default withFirebase(SignOutPage);
