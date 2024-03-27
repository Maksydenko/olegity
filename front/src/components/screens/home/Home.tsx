import { FC } from "react";

import FullScreenVideo from "@/components/screens/home/FullScreenVideo/FullScreenVideo";
import AboutMain from "@/components/screens/home/AboutMain/AboutMain";
import AlbumsMain from "@/components/screens/home/AlbumsMain/AlbumsMain";
import VideosMain from "@/components/screens/home/VideosMain/VideosMain";
import ConcertsMain from "@/components/screens/home/ConcertsMain/ConcertsMain";

interface HomeProps {}

const HomePage: FC<HomeProps> = () => (
  <main className="home-page">
    <FullScreenVideo className="home-page__full-screen-video" />
    <AboutMain className="home-page__about-main" />
    <AlbumsMain className="home-page__albums-main" />
    <VideosMain className="home-page__videos-main" />
    <ConcertsMain className="home-page__concerts-main" />
  </main>
);

export default HomePage;
