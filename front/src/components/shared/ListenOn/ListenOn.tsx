import { FC } from "react";
import clsx from "clsx";

import Items from "./Items/Items";
import { IMusicPlatforms } from "@/components/shared/ListenOn/musicPlatforms.interface";

interface ListenOnProps {
  className?: string;
  links: IMusicPlatforms;
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
