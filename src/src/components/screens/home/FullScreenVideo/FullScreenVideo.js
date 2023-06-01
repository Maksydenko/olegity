import FullScreen from "@base/FullScreen/FullScreen";
import Video from "@base/Video/Video";
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
    <Video
      className="full-screen-video"
      video={video}
      poster={poster}
      resetStyle
    />
  );

  return (
    <FullScreen className="full-screen-video" background={background}>
      <Img className="full-screen-video" img={img} />
    </FullScreen>
  );
};

export default FullScreenVideo;
