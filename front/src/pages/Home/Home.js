import FullScreenVideo from "@screens/home/FullScreenVideo/FullScreenVideo";
import AboutMain from "@screens/home/AboutMain/AboutMain";
import AlbumsMain from "@screens/home/AlbumsMain/AlbumsMain";
import VideosMain from "@screens/home/VideosMain/VideosMain";
import ConcertsMain from "@screens/home/ConcertsMain/ConcertsMain";

const Main = () => (
  <main className="home-page">
    <FullScreenVideo />
    <AboutMain />
    <AlbumsMain />
    <VideosMain />
    <ConcertsMain />
  </main>
);

export default Main;
