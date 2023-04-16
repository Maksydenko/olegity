import FullScreenVideo from "@base/FullScreenVideo/FullScreenVideo";

import poster from "@img/lsp/jpg/clip.jpg";
import video from "@assets/videos/binokl.mp4";
import logo from "@img/logos/lsp.svg";

function FullScreen() {
  const videos = [
    {
      src: video,
      type: "mp4",
    },
  ];

  return (
    <FullScreenVideo className="full-screen" poster={poster} videos={videos}>
      <div className="full-screen__img">
        <img src={logo} alt="LSP" />
      </div>
    </FullScreenVideo>
  );
}

export default FullScreen;
