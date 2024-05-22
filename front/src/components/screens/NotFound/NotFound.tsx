import { FC } from "react";
import { useTranslation } from "next-i18next";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/layout/Seo/Seo";
import { useRedirectToHomepage } from "./useRedirectToHomepage";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => {
  const { t } = useTranslation("common");
  const { time } = useRedirectToHomepage();

  return (
    <Layout className="not-found-page">
      <Seo title={t("not-found.title")} />
      <section className="not-found">
        <div className="not-found__container">
          <h1 className="not-found__title">{t("not-found.title")}</h1>
          <h2 className="not-found__label">{t("not-found.label")}</h2>
          <div className="not-found__text">
            <p>
              {t("not-found.text")} {time}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
