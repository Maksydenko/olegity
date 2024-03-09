import { StaticImageData } from "next/image";

export interface IImg {
  id?: number;
  src: StaticImageData | string;
  alt?: string;
}
