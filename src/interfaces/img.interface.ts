import { StaticImageData } from "next/image";

export interface IImg {
  src: StaticImageData | string;
  alt?: string;
}
