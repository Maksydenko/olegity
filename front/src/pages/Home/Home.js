import FullScreenVideo from "@screens/home/FullScreenVideo/FullScreenVideo";
import MainAbout from "@screens/home/MainAbout/MainAbout";
import MainAlbums from "@screens/home/MainAlbums/MainAlbums";
import MainVideos from "@screens/home/MainVideos/MainVideos";
import MainConcerts from "@screens/home/MainConcerts/MainConcerts";

const Main = () => (
  <main className="home-page">
    <FullScreenVideo />
    <MainAbout />
    <MainAlbums />
    <MainVideos />
    <MainConcerts />
  </main>
);

export default Main;
