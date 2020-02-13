import { SITE_TITLE } from "../constants";

const setDocumentTitle = pageName => {
  document.title = pageName ? `${SITE_TITLE} - ${pageName}` : SITE_TITLE;
};

export { setDocumentTitle };
