import { FC } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

import AboutSectionImg from "./AboutBlockImg/AboutBlockImg";
import AboutSectionVideo from "./AboutBlockVideo/AboutBlockVideo";

import { useBreakpointCheck } from "@/hooks/useBreakpointCheck";

import { getTranslate } from "@/utils/getTranslate.util";

import { lineBreak } from "@/constants/lineBreak.const";

import { Breakpoint } from "@/enums/breakpoint.enum";

import { IAbout } from "@/interfaces/about.interface";

interface AboutSectionProps {
  className?: string;
  about: IAbout;
  reverseAnimation?: boolean;
}

const AboutSection: FC<AboutSectionProps> = ({
  className,
  about: { translations, img, video },
  reverseAnimation,
}) => {
  const { locale } = useRouter();
  const isTablet = useBreakpointCheck(Breakpoint.Tablet);

  const currentTranslate = getTranslate(translations, locale);

  if (!currentTranslate) {
    return null;
  }

  const { title, text } = currentTranslate;
  const texts = text.split(lineBreak);

  const { length: videoLength } = video;
  const hasVideo = !!videoLength;

  return (
    <section
      className={clsx(
        className,
        "about-section",
        reverseAnimation && !hasVideo && "about-section_even"
      )}
    >
      {hasVideo ? (
        <AboutSectionVideo
          className="about-section__about-block"
          breakpoint={isTablet}
          title={title}
          texts={texts}
          img={img}
          video={video}
        />
      ) : (
        <AboutSectionImg
          className="about-section__about-block"
          breakpoint={isTablet}
          reverseAnimation={reverseAnimation}
          title={title}
          texts={texts}
          img={img}
        />
      )}
    </section>
  );
};

export default AboutSection;
