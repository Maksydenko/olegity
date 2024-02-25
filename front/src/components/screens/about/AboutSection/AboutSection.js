import clsx from "clsx";

import Img from "@base/Img/Img";
import TextBlock from "@shared/TextBlock/TextBlock";

const AboutSection = ({ className, keyword, img }) => {
  return (
    <section className={clsx(className, "about-section")}>
      <div className="about-section__container">
        <TextBlock className="about-section__text-block" keyword={keyword} />
        <Img className="about-section__img" img={img} />
      </div>
    </section>
  );
};

export default AboutSection;
