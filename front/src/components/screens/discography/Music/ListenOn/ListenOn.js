import clsx from "clsx";

import Items from "./Items/Items";

const ListenOn = ({
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
