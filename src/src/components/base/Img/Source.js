const ImgPicture = ({ img, loading = "lazy" }) => {
  const imgAttrs = {
    loading,
  };
  if (Array.isArray(img)) {
    const pictures = img
      .slice(0, -1)
      .map((picture, index) => (
        <source
          key={index}
          srcSet={picture.src}
          type={`image/${picture.type}`}
        />
      ));

    return (
      <picture>
        {pictures}
        <img
          src={img[img.length - 1].src}
          alt={img[img.length - 1].alt}
          {...imgAttrs}
        />
      </picture>
    );
  }
  return <img src={img.src} alt={img.alt} {...imgAttrs} />;
};

export default ImgPicture;
