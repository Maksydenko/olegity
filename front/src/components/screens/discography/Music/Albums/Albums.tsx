import { FC } from "react";

import SliderSwiper from "@/components/base/SliderSwiper/SliderSwiper";
import Album from "./Album";

import { IAlbum } from "@/interfaces/music.interface";

interface AlbumsProps {
  albums: IAlbum[];
  type: "album" | "ep";
}

const Albums: FC<AlbumsProps> = ({ albums, type = "album" }) => {
  const slides = albums.map((album) => {
    const { title } = album;

    return <Album key={title} album={album} />;
  });

  return (
    <div className="music__albums albums">
      <div className="albums__container">
        <SliderSwiper
          className="albums__slider-swiper"
          loop
          parallax
          hash={type}
        >
          {slides}
        </SliderSwiper>
      </div>
    </div>
  );
};

export default Albums;
