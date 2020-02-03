import React, { useEffect } from "react";

import "./style.css";
import { setDocumentTitle } from "../../../helpers";

const PageNotFound = () => {
  useEffect(setDocumentTitle("Page Not Found"));

  return (
    <main id="page-not-found">
      <h1>Page not found</h1>
    </main>
  );
};

export default PageNotFound;
