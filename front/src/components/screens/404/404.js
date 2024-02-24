import { useTranslation } from "react-i18next";

import { useRedirectToHomepage } from "./useRedirectToHomepage";

const Page404 = () => {
  const time = useRedirectToHomepage();
  const { t } = useTranslation();

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <span className="not-found__label">{t("page-not-found")}</span>
        <p className="not-found__redirect-homepage">
          {t("redirect-homepage")} {time}
        </p>
      </div>
    </section>
  );
};

export default Page404;
