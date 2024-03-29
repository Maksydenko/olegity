import { FC } from "react";
import clsx from "clsx";

import FullScreen from "@/components/base/FullScreen/FullScreen";
import LocalVideo from "@/components/base/Video/LocalVideo";
import Img from "@/components/base/Img/Img";

interface FullScreenVideoProps {
  className?: string;
}

const FullScreenVideo: FC<FullScreenVideoProps> = ({ className }) => {
  const background = (
    <LocalVideo
      className="full-screen-video__video"
      src="/videos/binokl.mp4"
      poster="/img/lsp/jpg/clip.jpg"
    />
  );

  return (
    <section className={clsx(className, "full-screen-video")}>
      <FullScreen
        className="full-screen-video__full-screen"
        background={background}
      >
        <Img
          className="full-screen-video__img"
          src="/img/logos/lsp.svg"
          alt="LSP"
          priority
        />
      </FullScreen>
    </section>
  );
};

export default FullScreenVideo;
