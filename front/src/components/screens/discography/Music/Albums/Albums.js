import SliderSwiper from "@base/SliderSwiper/SliderSwiper";
import Album from "./Album";

const Albums = ({ albums }) => {
  const slides = albums.map((album, index) => (
    <Album key={index} album={album} />
  ));

  return (
    <div className="music__albums albums">
      <div className="albums__container">
        <SliderSwiper className="albums__swiper" loop parallax>
          {slides}
        </SliderSwiper>
      </div>
    </div>
  );
};

export default Albums;
