"use client";

// import { useTranslation } from "next-i18next";

import { useRedirectToHomepage } from "./useRedirectToHomepage";

const NotFound = () => {
  // const { t } = useTranslation();
  const time = useRedirectToHomepage();

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <span className="not-found__label">{"page-not-found"}</span>
        <p className="not-found__redirect-homepage">
          {"redirect-homepage"}
          {time}
        </p>
      </div>
    </section>
  );
};

export default NotFound;
