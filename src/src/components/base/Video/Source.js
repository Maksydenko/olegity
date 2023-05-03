const Source = ({
  video,
  poster,
  autoPlay = true,
  muted = true,
  controls,
  loop = true,
  preload = "auto",
}) => {
  const videoAttrs = {
    poster,
    autoPlay,
    muted,
    controls,
    loop,
    preload,
  };

  if (Array.isArray(video)) {
    const videos = video.map((videoItem, index) => (
      <source
        key={index}
        src={videoItem.src}
        type={`video/${videoItem.type}`}
      />
    ));

    return <video {...videoAttrs}>{videos}</video>;
  }
  return (
    <video {...videoAttrs}>
      <source src={video} type={`video/mp4`} />
    </video>
  );
};

export default Source;
