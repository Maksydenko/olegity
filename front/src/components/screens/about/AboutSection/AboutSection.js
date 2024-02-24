import clsx from "clsx";

import Img from "@base/Img/Img";
import MainBlock from "@shared/MainBlock/MainBlock";

const AboutSection = ({ className, title, text, img }) => {
  return (
    <section className={clsx(className, "about-section")}>
      <div className="about-section__container">
        <MainBlock
          className="about-section__main-block"
          title={title}
          text={text}
        />
        <Img className="about-section__img" img={img} />
      </div>
    </section>
  );
};

export default AboutSection;
