import FullScreen from "@/components/base/FullScreen/FullScreen";
import LocalVideo from "@/components/base/Video/LocalVideo";
import Img from "@/components/base/Img/Img";

// import videoMp4 from "@/assets/videos/binokl.mp4";
import poster from "@/assets/img/lsp/jpg/clip.jpg";
import logo from "@/assets/img/logos/lsp.svg";

const FullScreenVideo = () => {
  // const video = {
  //   src: videoMp4,
  //   type: "mp4",
  // };

  const img = {
    src: logo,
    alt: "LSP",
  };

  // const background = (
  //   <LocalVideo
  //     className="full-screen-video__video"
  //     video={video}
  //     poster={poster}
  //   />
  // );

  return (
    <section className="full-screen-video">
      <FullScreen
        className="full-screen-video__full-screen"
        // background={background}
      >
        <Img className="full-screen-video__img" img={img} loading="preload" />
      </FullScreen>
    </section>
  );
};

export default FullScreenVideo;
