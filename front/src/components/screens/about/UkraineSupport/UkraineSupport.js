import ObjectOutsideContainer from "@base/ObjectOutsideContainer/ObjectOutsideContainer";
import TextBlock from "@shared/TextBlock/TextBlock";
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
    title: "ЛСП (LSP) — Ураганы (Hurricanes) [Live]",
    url: "https://www.youtube.com/embed/8CqwOVNB4-w?color=white",
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
        className="ukraine-support__object-outside-container object-outside-container_tablet"
        object={object}
      >
        <TextBlock
          className="ukraine-support__text-block"
          keyword="ukraine-support"
        />
      </ObjectOutsideContainer>
    </section>
  );
};

export default UkraineSupport;
