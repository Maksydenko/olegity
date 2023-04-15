import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const [time, setTime] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    if (time <= 0) {
      navigate("/");
    } else {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [time, navigate]);

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
}

export default PageNotFound;
