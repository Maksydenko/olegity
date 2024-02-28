const Sources = ({ video }) => {
  const getType = (type) => {
    return `video/${type}`;
  };

  const isArray = Array.isArray(video);

  if (isArray) {
    const sources = video.map((videoItem) => {
      const { src, type: extension } = videoItem;
      const type = getType(extension);

      return <source key={type} src={src} type={type} />;
    });

    return { sources };
  }

  const { src, type } = video;

  return <source src={src} type={getType(type)} />;
};

export default Sources;
