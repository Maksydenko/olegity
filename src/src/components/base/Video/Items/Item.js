const Item = ({ video }) => {
  if (Array.isArray(video)) {
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
