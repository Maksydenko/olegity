import { useState } from "react";

import { useWindowSize } from "@hooks/useWindowSize";

import Video from "./Video";

function FullScreenVideo(props) {
  const [height, setHeight] = useState("100vh");

  function handleResizeHeight() {
    const windowHeight = window.innerHeight;
    setHeight(windowHeight + "px");
  }

  useWindowSize(handleResizeHeight, height);

  const styleMinHeight = {
    minHeight: height,
  };

  const { className, children, poster, videos } = props;

  return (
    <section
      className={`${className} full-screen-video`}
      style={styleMinHeight}
    >
      <div className="full-screen-video__body">{children}</div>
      <Video poster={poster} videos={videos} />
    </section>
  );
}

export default FullScreenVideo;
