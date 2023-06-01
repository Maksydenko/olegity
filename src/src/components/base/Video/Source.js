import { forwardRef } from "react";

export const Source = forwardRef(
  (
    {
      video,
      poster,
      autoPlay = true,
      muted = true,
      controls,
      loop = true,
      preload = "auto",
    },
    ref
  ) => {
    const videoAttrs = {
      poster,
      autoPlay,
      muted,
      controls,
      loop,
      preload,
    };

    const getSource = () => {
      if (Array.isArray(video)) {
        const videos = video.map((videoItem, index) => (
          <source
            key={index}
            src={videoItem.src}
            type={`video/${videoItem.type}`}
          />
        ));

        return videos;
      }
      return <source src={video.src} type={`video/${video.type}`} />;
    };
    return (
      <video {...videoAttrs} ref={ref}>
        {getSource()}
      </video>
    );
  }
);
