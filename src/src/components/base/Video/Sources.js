const Sources = ({ video }) => {
  const isArray = Array.isArray(video);

  const getType = (type) => {
    return `video/${type}`;
  };

  if (isArray) {
    const sources = video.map((videoItem, index) => {
      const { src, type } = videoItem;

      return <source key={index} src={src} type={getType(type)} />;
    });

    return { sources };
  } else {
    const { src, type } = video;

    return <source src={src} type={getType(type)} />;
  }
};

export default Sources;
