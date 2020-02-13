import { useEffect } from "react";

import { SITE_TITLE } from "../constants";

export default function useDocumentTitle(pageName) {
  useEffect(() => {
    document.title = pageName ? `${SITE_TITLE} - ${pageName}` : SITE_TITLE;
  }, [pageName]);
}
