import { FC } from "react";
import clsx from "clsx";

import ObjectOutsideContainer from "@/components/base/ObjectOutsideContainer/ObjectOutsideContainer";
import Img from "@/components/base/Img/Img";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

interface AboutMainProps {
  className?: string;
}

const AboutMain: FC<AboutMainProps> = ({ className }) => {
  const link = {
    label: "more",
    value: "/about",
  };

  const object = (
    <Img
      className="about-main__img"
      src="/img/lsp/about-main.jpg"
      alt="Oleg LSP"
    />
  );

  return (
    <section className={clsx(className, "about-main")}>
      <ObjectOutsideContainer
        className="about-main__object-outside-container"
        object={object}
      >
        <TextBlock
          className="about-main__text-block"
          keyword="about-main"
          link={link}
        />
      </ObjectOutsideContainer>
    </section>
  );
};

export default AboutMain;