import { forwardRef } from "react";

import Item from "./Item";

export const Items = forwardRef(
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

    return (
      <video {...videoAttrs} ref={ref}>
        <Item video={video} />
      </video>
    );
  }
);
