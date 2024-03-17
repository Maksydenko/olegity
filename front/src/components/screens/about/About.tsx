import { FC } from "react";

import AboutSections from "@/components/screens/about/AboutSections/AboutSections";
import UkraineSupport from "@/components/screens/about/UkraineSupport/UkraineSupport";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => (
  <main className="about-page">
    <AboutSections />
    <UkraineSupport />
  </main>
);

export default AboutPage;
