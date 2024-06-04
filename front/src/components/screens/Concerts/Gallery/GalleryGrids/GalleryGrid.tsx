import { FC } from "react";

import Img from "@/components/base/Img/Img";

import { IConcert } from "@/interfaces/concert.interface";

interface GalleryGridProps {
  imgGroup: IConcert[];
}

const GalleryGrid: FC<GalleryGridProps> = ({ imgGroup }) => {
  const imgGrid = imgGroup.map(({ id, img }) => (
    <Img key={id} className="gallery__img" src={img} alt="LSP" />
  ));

  return imgGrid;
};

export default GalleryGrid;
