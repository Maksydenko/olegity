import { FC } from "react";

import Img from "@/components/base/Img/Img";

import { IImg } from "@/components/base/Img/img.interface";

interface GridProps {
  groupImgs: IImg[];
}

const Grid: FC<GridProps> = ({ groupImgs }) => {
  return groupImgs.map((img, index) => (
    <Img key={index} className="gallery__img" img={img} />
  ));
};

export default Grid;
