import { useTranslation } from "react-i18next";

import Btn from "@form/Btn/Btn";
import SliderVideos from "./SliderVideos";

const MainVideos = () => {
  const { t } = useTranslation();

  return (
    <section className="main-videos">
      <h2 className="main-videos__title">{t("latest-videos")}</h2>
      <SliderVideos />
      <Btn className="main-videos__btn" path="/videos">
        {t("see-videos")}
      </Btn>
    </section>
  );
};

export default MainVideos;
