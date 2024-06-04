import { FC } from "react";
import clsx from "clsx";

import AboutSection from "./AboutSection/AboutSection";

import useAboutStore from "@/stores/useAbout.store";

interface AboutSectionsProps {
  className?: string;
}

const AboutSections: FC<AboutSectionsProps> = ({ className }) => {
  const { about } = useAboutStore();

  const aboutSectionItems = about.map((aboutItem, index) => {
    const { id } = aboutItem;
    const isEven = index % 2 !== 0;

    return (
      <AboutSection
        key={id}
        className="about-sections__about-section"
        about={aboutItem}
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
