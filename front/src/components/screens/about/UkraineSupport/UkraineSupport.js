import ObjectOutsideContainer from "@base/ObjectOutsideContainer/ObjectOutsideContainer";
import MainBlock from "@shared/MainBlock/MainBlock";
import PopupVideo from "@shared/PopupVideo/PopupVideo";

import uraganyLiveWebp from "@img/videos/music-videos/webp/uragany-live.webp";
import uraganyLive from "@img/videos/music-videos/jpg/uragany-live.jpg";

const UkraineSupport = () => {
  const img = [
    {
      src: uraganyLiveWebp,
      type: "webp",
    },
    {
      src: uraganyLive,
      alt: "Uragany live",
    },
  ];

  const video = {
    src: "https://www.youtube.com/embed/8CqwOVNB4-w?color=white",
    title: "ЛСП (LSP) — Ураганы (Hurricanes) [Live]",
  };

  const object = (
    <PopupVideo
      className="ukraine-support__popup-video"
      img={img}
      video={video}
    />
  );

  return (
    <section className="ukraine-support">
      <ObjectOutsideContainer
        className="ukraine-support__object-outside-container object-outside-container_pc"
        object={object}
      >
        <MainBlock
          className="ukraine-support__main-block"
          keyword="ukraine-support"
        />
      </ObjectOutsideContainer>
    </section>
  );
};

export default UkraineSupport;
