import { FC } from "react";

import AboutSections from "@/components/screens/about/AboutSections/AboutSections";
import UkraineSupport from "@/components/screens/about/UkraineSupport/UkraineSupport";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <main className="about-page">
    <AboutSections className="about-page__about-sections" />
    <UkraineSupport className="about-page__ukraine-support" />
  </main>
);

export default About;
