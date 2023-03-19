import FullScreen from "@components/pages/home/FullScreen/FullScreen";
import MainAbout from "@components/pages/home/MainAbout/MainAbout";
import MainAlbums from "@components/pages/home/MainAlbums/MainAlbums";
import MainVideos from "@components/pages/home/MainVideos/MainVideos";
import MainConcerts from "@components/pages/home/MainConcerts/MainConcerts";

function Main() {
  return (
    <main className="home-page">
      <FullScreen />
      <MainAbout />
      <MainAlbums />
      <MainVideos />
      <MainConcerts />
    </main>
  );
}

export default Main;
