import { useState } from "react";

import { useWindowSize } from "@hooks/useWindowSize";

import Video from "./Video";

const FullScreenVideo = ({ className, children, poster, videos }) => {
  const [height, setHeight] = useState("100vh");

  const handleResizeHeight = () => {
    const windowHeight = window.innerHeight;
    setHeight(windowHeight + "px");
  };

  useWindowSize(handleResizeHeight, height);

  const styleMinHeight = {
    minHeight: height,
  };

  return (
    <section
      className={`${className} full-screen-video`}
      style={styleMinHeight}
    >
      <div className="full-screen-video__body">{children}</div>
      <Video poster={poster} videos={videos} />
    </section>
  );
};

export default FullScreenVideo;
