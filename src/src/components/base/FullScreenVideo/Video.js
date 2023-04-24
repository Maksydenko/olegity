const Video = ({ poster, videos }) => (
  <video
    className="full-screen-video__video"
    poster={poster}
    autoPlay
    muted
    loop
    preload="auto"
  >
    {videos.map((video, index) => (
      <source key={index} src={video.src} type={`video/${video.type}`} />
    ))}
  </video>
);

export default Video;
