"use client";

import { FC, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import clsx from "clsx";

import ObjectOutsideContainer from "@/components/base/ObjectOutsideContainer/ObjectOutsideContainer";
import TextBlock from "@/components/shared/TextBlock/TextBlock";
import PopupVideo from "@/components/shared/PopupVideo/PopupVideo";

import { useBreakpointCheck } from "@/hooks/useBreakpointCheck";

import { Breakpoint } from "@/enums/breakpoint.enum";

interface UkraineSupportProps {
  className?: string;
}

const UkraineSupport: FC<UkraineSupportProps> = ({ className }) => {
  const ukraineSupportRef = useRef(null);
  const isTablet = useBreakpointCheck(Breakpoint.Tablet);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".ukraine-support__text-block", {
        scrollTrigger: {
          trigger: ".ukraine-support__text-block",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
        duration: 0.8,
        x: isTablet ? 100 : -100,
      });
      gsap.from(".ukraine-support__popup-video", {
        scrollTrigger: {
          trigger: ".ukraine-support__popup-video",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
        duration: 0.8,
        x: 100,
      });

      if (isTablet) {
        return;
      }
      gsap.from(".ukraine-support__text-block", {
        scrollTrigger: {
          trigger: ".ukraine-support__text-block",
          scrub: true,
          markers: false,
          toggleActions: "restart pause reverse pause",
        },
        duration: 0.8,
        y: 50,
      });
      gsap.from(".ukraine-support__popup-video", {
        scrollTrigger: {
          trigger: ".ukraine-support__popup-video",
          scrub: true,
          markers: false,
          toggleActions: "restart pause reverse pause",
        },
        duration: 0.8,
        y: -50,
      });
    },
    {
      dependencies: [isTablet],
      scope: ukraineSupportRef,
    }
  );

  const img = {
    src: "/img/videos/music-videos/uragany-live.jpg",
    alt: "Uragany (Live)",
  };

  const video = {
    title: "ЛСП (LSP) — Ураганы (Hurricanes) [Live]",
    url: "https://www.youtube.com/embed/8CqwOVNB4-w?color=white",
  };

  const object = (
    <PopupVideo
      className="ukraine-support__popup-video"
      img={img}
      video={video}
    />
  );

  return (
    <section
      className={clsx(className, "ukraine-support")}
      ref={ukraineSupportRef}
    >
      <ObjectOutsideContainer
        className="ukraine-support__object-outside-container object-outside-container_tablet"
        object={object}
      >
        <TextBlock
          className="ukraine-support__text-block"
          keyword="ukraine-support"
        />
      </ObjectOutsideContainer>
    </section>
  );
};

export default UkraineSupport;
