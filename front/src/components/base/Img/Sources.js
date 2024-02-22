import { forwardRef } from "react";

export const Sources = forwardRef(({ img, loading = "lazy" }, ref) => {
  const imgAttrs = {
    loading,
  };

  if (Array.isArray(img)) {
    const pictures = img.slice(0, -1).map((picture, index) => {
      const { src, type } = picture;

      return (
        <source key={index} srcSet={src} type={`image/${type}`} ref={ref} />
      );
    });

    const { length } = img;
    const lastImg = img[length - 1];
    const { src, alt } = lastImg;

    return (
      <picture>
        {pictures}
        <img src={src} alt={alt} {...imgAttrs} ref={ref} />
      </picture>
    );
  }
  return <img src={img.src} alt={img.alt} {...imgAttrs} ref={ref} />;
});
