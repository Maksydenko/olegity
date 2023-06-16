const Item = ({ video }) => {
  const isArray = Array.isArray(video);

  if (isArray) {
    const videos = video.map((videoItem, index) => (
      <source
        key={index}
        src={videoItem.src}
        type={`video/${videoItem.type}`}
      />
    ));

    return { videos };
  }
  return <source src={video.src} type={`video/${video.type}`} />;
};

export default Item;
