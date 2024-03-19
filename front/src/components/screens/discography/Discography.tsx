import { FC } from "react";

import Music from "@/components/screens/discography/Music/Music";

interface DiscographyProps {}

const Discography: FC<DiscographyProps> = () => (
  <main className="discography-page">
    <Music />
  </main>
);

export default Discography;
