import Items from "./Items/Items";

const ListenOn = ({
  className,
  links,
  swiperParallax,
  swiperParallaxDuration,
}) => (
  <div className={`${className}__listen-on listen-on`}>
    <ul className="listen-on__list">
      <Items
        links={links}
        swiperParallax={swiperParallax}
        swiperParallaxDuration={swiperParallaxDuration}
      />
    </ul>
  </div>
);

export default ListenOn;
