import { FC } from "react";
import clsx from "clsx";

import AboutSection from "./AboutSection/AboutSection";

import { aboutSections } from "./aboutSections.data";

interface AboutSectionsProps {
  className?: string;
}

const AboutSections: FC<AboutSectionsProps> = ({ className }) => {
  const aboutSectionItems = aboutSections.map((section, index) => {
    const { keyword, img } = section;
    const isEven = index % 2 !== 0;

    return (
      <AboutSection
        key={keyword}
        keyword={keyword}
        img={img}
        reverseAnimation={isEven}
      />
    );
  });

  return (
    <div className={clsx(className, "about__sections")}>
      {aboutSectionItems}
    </div>
  );
};

export default AboutSections;
