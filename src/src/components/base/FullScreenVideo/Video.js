function Video(props) {
  const { poster, videos } = props;
  const videoItems = videos.map((video, index) => (
    <source key={index} src={video.src} type={`video/${video.type}`} />
  ));

  return (
    <video
      className="full-screen-video__video"
      poster={poster}
      autoPlay
      muted
      loop
      preload="auto"
    >
      {videoItems}
    </video>
  );
}

export default Video;
