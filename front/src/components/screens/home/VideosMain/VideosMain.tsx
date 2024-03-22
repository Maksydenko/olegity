import { FC } from "react";
// import { useTranslation } from "next-i18next";

import Btn from "@/components/form/Btn/Btn";
import VideosMainSlider from "./VideosMainSlider";

interface VideosMainProps {}

const VideosMain: FC<VideosMainProps> = () => {
  // const { t } = useTranslation();

  return (
    <section className="main-videos">
      <h2 className="main-videos__title">{"latest-videos"}</h2>
      <VideosMainSlider />
      <Btn className="main-videos__btn" path="/videos">
        {"see-videos"}
      </Btn>
    </section>
  );
};

export default VideosMain;
