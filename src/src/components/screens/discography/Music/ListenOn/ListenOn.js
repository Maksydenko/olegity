import Items from "./Items/Items";

function ListenOn(props) {
  const { className, links, swiperParallax, swiperParallaxDuration } = props;

  return (
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
}

export default ListenOn;
