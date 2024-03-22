"use client";

import { CSSProperties, FC, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import Loader from "@/components/shared/Loader/Loader";

import { IImg } from "@/interfaces/img.interface";

interface ImgProps {
  className?: string;
  // src: StaticImageData | string;
  // alt?: string;
  img: IImg | IImg[];
  svg?: boolean;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  loader?: boolean;
  style?: CSSProperties;
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
  sizes = "100%",
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

  const showLoader = loader && isLoading;

  return (
    <div className={clsx(className, "img", svg && "img_svg")} style={style}>
      {showLoader && <Loader className="img__loader" />}
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
              sizes,
            })}
        onLoad={handleLoad}
        ref={imgRef}
      />
    </div>
  );
};

export default Img;
