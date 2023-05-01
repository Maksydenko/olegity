import { useTranslation } from "react-i18next";

import { useRedirectToHomepage } from "./useRedirectToHomepage";

const Page404 = () => {
  const time = useRedirectToHomepage();
  const { t } = useTranslation();

  return (
    <main className="404-page">
      <div className="page-not-found">
        <div className="page-not-found__container">
          <h1 className="page-not-found__title">404</h1>
          <h2 className="page-not-found__label">{t("page-not-found")}</h2>
          <p className="page-not-found__redirect-homepage">
            {t("redirect-homepage")} {time}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page404;
