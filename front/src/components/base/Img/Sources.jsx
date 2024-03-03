import { forwardRef } from "react";

export const Sources = forwardRef(({ img, loading }, ref) => {
  const imgAttrs = {
    loading,
  };

  const isArray = Array.isArray(img);

  if (isArray) {
    const pictures = img.slice(0, -1).map((picture, index) => {
      const { src, type } = picture;

      return (
        <source key={index} srcSet={src} type={`image/${type}`} ref={ref} />
      );
    });

    const { length: imgLength } = img;
    const lastImg = img[imgLength - 1];
    const { src, alt } = lastImg;

    return (
      <picture>
        {pictures}
        <img src={src} alt={alt} {...imgAttrs} ref={ref} />
      </picture>
    );
  }

  const { src, alt } = img;

  return <img src={src} alt={alt} {...imgAttrs} ref={ref} />;
});
