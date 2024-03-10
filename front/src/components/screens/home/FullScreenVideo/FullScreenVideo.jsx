import FullScreen from "@/components/base/FullScreen/FullScreen";
import LocalVideo from "@/components/base/Video/LocalVideo";
import Img from "@/components/base/Img/Img";

const FullScreenVideo = () => {
  const img = {
    src: "/img/logos/lsp.svg",
    alt: "LSP",
  };

  const background = (
    <LocalVideo
      className="full-screen-video__video"
      src="/videos/binokl.mp4"
      poster="/img/lsp/jpg/clip.jpg"
    />
  );

  return (
    <section className="full-screen-video">
      <FullScreen
        className="full-screen-video__full-screen"
        background={background}
      >
        <Img className="full-screen-video__img" img={img} loading="preload" />
      </FullScreen>
    </section>
  );
};

export default FullScreenVideo;
