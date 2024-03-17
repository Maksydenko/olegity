import { FC } from "react";
import clsx from "clsx";

import Items from "./Items/Items";

interface ListenOnProps {
  className?: string;
  links: {
    spotify: string;
    appleMusic: string;
    youtubeMusic: string;
    deezer: string;
  };
  swiperParallax?: number;
  swiperParallaxDuration?: number;
}

const ListenOn: FC<ListenOnProps> = ({
  className,
  links,
  swiperParallax,
  swiperParallaxDuration,
}) => {
  return (
    <div className={clsx(className, "listen-on")}>
      <Items
        links={links}
        swiperParallax={swiperParallax}
        swiperParallaxDuration={swiperParallaxDuration}
      />
    </div>
  );
};

export default ListenOn;
