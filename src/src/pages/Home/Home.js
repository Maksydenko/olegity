import FullScreen from "@screens/home/FullScreen/FullScreen";
import MainAbout from "@screens/home/MainAbout/MainAbout";
import MainAlbums from "@screens/home/MainAlbums/MainAlbums";
import MainVideos from "@screens/home/MainVideos/MainVideos";
import MainConcerts from "@screens/home/MainConcerts/MainConcerts";

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
