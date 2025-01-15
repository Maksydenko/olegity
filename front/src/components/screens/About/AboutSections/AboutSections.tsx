import { FC } from "react";
import clsx from "clsx";

import AboutSection from "./AboutSection/AboutSection";

import { IAbout } from "@/interfaces/about.interface";

interface AboutSectionsProps {
  className?: string;
  about: IAbout[];
}

const AboutSections: FC<AboutSectionsProps> = ({ className, about }) => {
  const aboutSectionItems = about.map((aboutItem, index) => {
    const { ID } = aboutItem;
    const isEven = index % 2 !== 0;

    return (
      <AboutSection
        key={ID}
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
