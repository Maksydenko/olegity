"use client";

// import { useTranslation } from "next-i18next";

import { useRedirectToHomepage } from "./useRedirectToHomepage";

const NotFound = () => {
  // const { t } = useTranslation();
  const { time } = useRedirectToHomepage();

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">{"not-found-page.title"}</h1>
        <span className="not-found__label">{"not-found-page.label"}</span>
        <div className="not-found__redirect-homepage">
          <p>
            {"not-found-page.text"}
            {time}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
