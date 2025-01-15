import { FC, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import clsx from "clsx";

import { useGSAP } from "@gsap/react";

import ObjectOutsideContainer from "@/components/base/ObjectOutsideContainer/ObjectOutsideContainer";
import PopupVideo from "@/components/shared/PopupVideo/PopupVideo";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

import { IAbout } from "@/interfaces/about.interface";

interface AboutSectionVideoProps {
  className?: string;
  breakpoint: boolean;
  title: IAbout["translations"][0]["title"];
  texts: IAbout["translations"][0]["text"][];
  img: IAbout["img"];
  video: IAbout["link"];
}

const AboutSectionVideo: FC<AboutSectionVideoProps> = ({
  className,
  breakpoint,
  title,
  texts,
  img,
  video,
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
        x: breakpoint ? 100 : -100,
      });
      gsap.from(".about-block__popup-video", {
        scrollTrigger: {
          trigger: ".about-block__popup-video",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
        duration: 0.8,
        x: 100,
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
      gsap.from(".about-block__popup-video", {
        scrollTrigger: {
          trigger: ".about-block__popup-video",
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

  const object = (
    <PopupVideo
      className="about-block__popup-video"
      img={img}
      video={video!}
      title={title}
    />
  );

  return (
    <div
      className={clsx(className, "about-block about-block_video")}
      ref={aboutBlockRef}
    >
      <ObjectOutsideContainer
        className="about-block__object-outside-container object-outside-container_tablet"
        object={object}
      >
        <TextBlock
          className="about-block__text-block"
          title={title}
          texts={texts}
        />
      </ObjectOutsideContainer>
    </div>
  );
};

export default AboutSectionVideo;
