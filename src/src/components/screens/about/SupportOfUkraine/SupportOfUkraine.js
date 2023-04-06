import ResponsiveObjectOut from "@base/ResponsiveObjectOut/ResponsiveObjectOut";

import MainBlock from "@common/MainBlock/MainBlock";
import Video from "@common/Video/Video";

function SupportOfUkraine() {
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

  const object = <Video className="support-of-ukraine" video={video} />;

  return (
    <ResponsiveObjectOut className="support-of-ukraine" pc object={object}>
      <MainBlock
        className="support-of-ukraine"
        title="support-of-ukraine"
        text={text}
      />
    </ResponsiveObjectOut>
  );
}

export default SupportOfUkraine;
