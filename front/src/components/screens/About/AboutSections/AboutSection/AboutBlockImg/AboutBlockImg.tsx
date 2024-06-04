import { FC, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import clsx from "clsx";

import { useGSAP } from "@gsap/react";

import Img from "@/components/base/Img/Img";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

import { IAbout } from "@/interfaces/about.interface";

interface AboutSectionImgProps {
  className?: string;
  breakpoint: boolean;
  reverseAnimation?: boolean;
  title: IAbout["translations"][0]["title"];
  texts: IAbout["translations"][0]["text"][];
  img: IAbout["img"];
}

const AboutSectionImg: FC<AboutSectionImgProps> = ({
  className,
  breakpoint,
  reverseAnimation,
  title,
  texts,
  img,
}) => {
  const aboutBlockRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".about-block__text-block", {
        scrollTrigger: {
          trigger: ".about-block__text-block",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
        duration: 0.8,
        x: breakpoint
          ? reverseAnimation
            ? -100
            : 100
          : reverseAnimation
          ? 100
          : -100,
      });
      gsap.from(".about-block__img", {
        scrollTrigger: {
          trigger: ".about-block__img",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
        duration: 0.8,
        x: reverseAnimation ? -100 : 100,
      });

      if (breakpoint) {
        return;
      }
      gsap.from(".about-block__text-block", {
        scrollTrigger: {
          trigger: ".about-block__text-block",
          scrub: true,
          markers: false,
          toggleActions: "restart pause reverse pause",
        },
        duration: 0.8,
        y: 50,
      });
      gsap.from(".about-block__img", {
        scrollTrigger: {
          trigger: ".about-block__img",
          scrub: true,
          markers: false,
          toggleActions: "restart pause reverse pause",
        },
        duration: 0.8,
        y: -50,
      });
    },
    {
      dependencies: [breakpoint],
      scope: aboutBlockRef,
    }
  );

  return (
    <div
      className={clsx(
        className,
        "about-block about-block_img",
        reverseAnimation && "about-block_reverse"
      )}
      ref={aboutBlockRef}
    >
      <div className="about-block__container">
        <TextBlock
          className="about-block__text-block"
          title={title}
          texts={texts}
        />
        <Img className="about-block__img" src={img} alt={title} />
      </div>
    </div>
  );
};

export default AboutSectionImg;
