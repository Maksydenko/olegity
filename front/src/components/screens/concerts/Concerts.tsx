import { FC } from "react";

import AboutConcerts from "@/components/screens/concerts/AboutConcerts/AboutConcerts";
import Gallery from "@/components/screens/concerts/Gallery/Gallery";

interface ConcertsProps {}

const Concerts: FC<ConcertsProps> = () => (
  <main className="concerts-page">
    <AboutConcerts className="concerts-page__about-concerts" />
    <Gallery className="concerts-page__gallery" />
  </main>
);

export default Concerts;
