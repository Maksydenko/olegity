import ObjectOutsideContainer from "@base/ObjectOutsideContainer/ObjectOutsideContainer";
import Iframe from "@base/Video/Iframe";
import MainBlock from "@shared/MainBlock/MainBlock";

const SupportOfUkraine = () => {
  const text = [
    "support-of-ukraine-1",
    "support-of-ukraine-2",
    "support-of-ukraine-3",
    "support-of-ukraine-4",
  ];
  const video = {
    src: "https://www.youtube.com/embed/8CqwOVNB4-w?color=white",
    title: "ЛСП (LSP) — Ураганы (Hurricanes) [Live]",
  };
  const object = <Iframe className="support-of-ukraine" video={video} />;

  return (
    <section className="support-of-ukraine">
      <ObjectOutsideContainer
        className="support-of-ukraine__object-outside-container object-outside-container_pc"
        // modifier="pc"
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
