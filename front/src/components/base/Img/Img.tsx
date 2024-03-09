"use client";

import { FC, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import Loader from "@/components/shared/Loader/Loader";

import { IImg } from "./img.interface";

interface ImgProps {
  className?: string;
  // src: IImg["src"];
  // alt?: IImg["alt"];
  img: IImg | IImg[];
  svg?: boolean;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  size?: string;
  width?: number;
  height?: number;
  loader?: boolean;
  style?: {
    [property: string]: string;
  };
}

const Img: FC<ImgProps> = ({
  className,
  img,
  // src,
  // alt = "",
  svg,
  priority,
  quality = 75,
  fill = true,
  size = "100vw",
  width,
  height,
  loader = true,
  style,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={clsx(className, "img", svg && "img_svg")} style={style}>
      {loader && isLoading && <Loader className="img__loader" />}
      <Image
        src={Array.isArray(img) ? img?.[0]?.src : img.src}
        alt={(Array.isArray(img) ? img?.[0]?.alt : img.alt) || ""}
        priority={priority}
        quality={quality}
        {...(width && height
          ? {
              width,
              height,
            }
          : {
              fill,
              size,
            })}
        onLoad={handleLoad}
        ref={imgRef}
      />
    </div>
  );
};

export default Img;
