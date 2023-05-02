import FullScreenVideo from "@base/FullScreenVideo/FullScreenVideo";
import Img from "@base/Img/Img";

import poster from "@img/lsp/jpg/clip.jpg";
import video from "@assets/videos/binokl.mp4";
import logo from "@img/logos/lsp.svg";

const FullScreen = () => {
  const videos = [
    {
      src: video,
      type: "mp4",
    },
  ];

  const img = {
    src: logo,
    alt: "LSP",
  };

  return (
    <FullScreenVideo className="full-screen" poster={poster} videos={videos}>
      <Img className="full-screen" img={img} />
    </FullScreenVideo>
  );
};

export default FullScreen;
