import { FC } from "react";
// import { useTranslation } from "next-i18next";
import clsx from "clsx";

import Btn from "@/components/form/Btn/Btn";
import VideosMainSlider from "./VideosMainSlider";

import { musicVideos } from "@/data/videos/musicVideos.data";

interface VideosMainProps {
  className?: string;
}

const VideosMain: FC<VideosMainProps> = ({ className }) => {
  // const { t } = useTranslation();

  return (
    <section className={clsx(className, "main-videos")}>
      <h2 className="main-videos__title">{"latest-videos"}</h2>
      <VideosMainSlider video={musicVideos} />
      <Btn className="main-videos__btn" path="/videos">
        {"see-videos"}
      </Btn>
    </section>
  );
};

export default VideosMain;
