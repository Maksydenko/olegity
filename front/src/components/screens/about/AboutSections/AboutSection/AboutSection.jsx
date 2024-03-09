"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import clsx from "clsx";

import Img from "@/components/base/Img/Img";
import TextBlock from "@/components/shared/TextBlock/TextBlock";

import { useBreakpointCheck } from "@/hooks/useBreakpointCheck";

import { breakpoints } from "@/constants/breakpoints.const";

const AboutSection = ({ keyword, img, reverseAnimation }) => {
  const aboutSectionRef = useRef(null);
  const isTablet = useBreakpointCheck(breakpoints.tablet);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".about-section__text-block", {
        scrollTrigger: {
          trigger: ".about-section__text-block",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
        duration: 0.8,
        x: isTablet
          ? reverseAnimation
            ? -100
            : 100
          : reverseAnimation
          ? 100
          : -100,
      });
      gsap.from(".about-section__img", {
        scrollTrigger: {
          trigger: ".about-section__img",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
        duration: 0.8,
        x: reverseAnimation ? -100 : 100,
      });

      if (isTablet) {
        return;
      }
      gsap.from(".about-section__text-block", {
        scrollTrigger: {
          trigger: ".about-section__text-block",
          scrub: true,
          markers: false,
          toggleActions: "restart pause reverse pause",
        },
        duration: 0.8,
        y: 50,
      });
      gsap.from(".about-section__img", {
        scrollTrigger: {
          trigger: ".about-section__img",
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
      scope: aboutSectionRef,
    }
  );

  return (
    <section
      className={clsx(
        "about-sections__about-section",
        "about-section",
        reverseAnimation && "about-section_even"
      )}
      ref={aboutSectionRef}
    >
      <div className="about-section__container">
        <TextBlock className="about-section__text-block" keyword={keyword} />
        <Img className="about-section__img" img={img} />
      </div>
    </section>
  );
};

export default AboutSection;
