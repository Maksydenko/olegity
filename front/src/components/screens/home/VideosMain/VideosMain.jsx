// import { useTranslation } from "next-i18next";

import Btn from "@/components/form/Btn/Btn";
import SliderVideos from "./SliderVideos";

const MainVideos = () => {
  // const { t } = useTranslation();

  return (
    <section className="main-videos">
      <h2 className="main-videos__title">{"latest-videos"}</h2>
      <SliderVideos />
      <Btn className="main-videos__btn" path="/videos">
        {"see-videos"}
      </Btn>
    </section>
  );
};

export default MainVideos;
