import ObjectOutsideContainer from "@base/ObjectOutsideContainer/ObjectOutsideContainer";
import MainBlock from "@shared/MainBlock/MainBlock";
import Iframe from "@base/Video/Iframe";

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
    <ObjectOutsideContainer className="support-of-ukraine" pc object={object}>
      <MainBlock
        className="support-of-ukraine"
        title="support-of-ukraine"
        text={text}
      />
    </ObjectOutsideContainer>
  );
};

export default SupportOfUkraine;
