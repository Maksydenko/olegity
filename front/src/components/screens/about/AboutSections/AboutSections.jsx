import AboutSection from "./AboutSection/AboutSection";

import { aboutSections } from "./aboutSections.const";

const AboutSections = () => {
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

  return <div className="about__sections">{aboutSectionItems}</div>;
};

export default AboutSections;
