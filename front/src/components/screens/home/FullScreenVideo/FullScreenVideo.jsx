import FullScreen from "@base/FullScreen/FullScreen";
import LocalVideo from "@base/Video/LocalVideo";
import Img from "@base/Img/Img";

import videoMp4 from "@assets/videos/binokl.mp4";
import poster from "@img/lsp/jpg/clip.jpg";
import logo from "@img/logos/lsp.svg";

const FullScreenVideo = () => {
  const video = {
    src: videoMp4,
    type: "mp4",
  };

  const img = {
    src: logo,
    alt: "LSP",
  };

  const background = (
    <LocalVideo
      className="full-screen-video__video"
      video={video}
      poster={poster}
    />
  );

  return (
    <section className="full-screen-video">
      <FullScreen
        className="full-screen-video__full-screen"
        background={background}
      >
        <Img className="full-screen-video__img" img={img} loading="auto" />
      </FullScreen>
    </section>
  );
};

export default FullScreenVideo;
