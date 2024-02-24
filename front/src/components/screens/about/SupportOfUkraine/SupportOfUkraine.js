import ObjectOutsideContainer from "@base/ObjectOutsideContainer/ObjectOutsideContainer";
import MainBlock from "@shared/MainBlock/MainBlock";
import PopupVideo from "@shared/PopupVideo/PopupVideo";
import uraganyLiveWebp from "@img/videos/music-videos/webp/uragany-live.webp";
import uraganyLive from "@img/videos/music-videos/jpg/uragany-live.jpg";

const SupportOfUkraine = () => {
  const text = [
    "support-of-ukraine-1",
    "support-of-ukraine-2",
    "support-of-ukraine-3",
    "support-of-ukraine-4",
  ];
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
    <PopupVideo className="support-of-ukraine__popup-video" img={img} video={video} />
  );

  return (
    <section className="support-of-ukraine">
      <ObjectOutsideContainer
        className="support-of-ukraine__object-outside-container object-outside-container_pc"
        object={object}
      >
        <MainBlock
          className="support-of-ukraine"
          title="support-of-ukraine"
          text={text}
        />
      </ObjectOutsideContainer>
    </section>
  );
};

export default SupportOfUkraine;
