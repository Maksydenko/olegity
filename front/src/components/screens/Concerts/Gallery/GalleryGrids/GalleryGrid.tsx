import { FC } from "react";

import Img from "@/components/base/Img/Img";

import { IImg } from "@/interfaces/img.interface";

interface GalleryGridProps {
  groupImgs: IImg[];
}

const GalleryGrid: FC<GalleryGridProps> = ({ groupImgs }) => {
  const imgGrid = groupImgs.map(({ src, alt }, index) => (
    <Img key={index} className="gallery__img" src={src} alt={alt} />
  ));

  return imgGrid;
};

export default GalleryGrid;
