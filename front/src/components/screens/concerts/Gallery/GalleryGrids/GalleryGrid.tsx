import { FC } from "react";

import Img from "@/components/base/Img/Img";

import { IImg } from "@/interfaces/img.interface";

interface GalleryGridProps {
  groupImgs: IImg[];
}

const GalleryGrid: FC<GalleryGridProps> = ({ groupImgs }) => {
  const imgGrid = groupImgs.map((img, index) => (
    <Img key={index} className="gallery__img" img={img} />
  ));

  return imgGrid;
};

export default GalleryGrid;
