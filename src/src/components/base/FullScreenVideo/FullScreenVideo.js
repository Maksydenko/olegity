import { useState, useEffect } from "react";

import Video from "./Video";

function FullScreenVideo(props) {
  const [height, setHeight] = useState("100vh");

  function handleHeight() {
    const windowHeight = window.innerHeight;
    setHeight(windowHeight + "px");
  }

  useEffect(() => {
    handleHeight();
    window.addEventListener("resize", handleHeight);

    return () => {
      window.removeEventListener("resize", handleHeight);
    };
  }, [height]);

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
