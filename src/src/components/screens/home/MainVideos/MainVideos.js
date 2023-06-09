import { useTranslation } from "react-i18next";

import MainLink from "@shared/MainLink/MainLink";
import SliderVideos from "./SliderVideos";

const MainVideos = () => {
  const { t } = useTranslation();
  const link = {
    path: "/videos",
    value: "see-videos",
  };

  return (
    <section className="main-videos">
      <h2 className="main-videos__title">{t("latest-videos")}</h2>
      <SliderVideos />
      <MainLink className="main-videos" link={link} />
    </section>
  );
};

export default MainVideos;
