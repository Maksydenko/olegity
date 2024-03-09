import FullScreenVideo from "@/components/screens/home/FullScreenVideo/FullScreenVideo";
import AboutMain from "@/components/screens/home/AboutMain/AboutMain";
import AlbumsMain from "@/components/screens/home/AlbumsMain/AlbumsMain";
import VideosMain from "@/components/screens/home/VideosMain/VideosMain";
import ConcertsMain from "@/components/screens/home/ConcertsMain/ConcertsMain";

const HomePage = () => (
  <main className="home-page">
    <FullScreenVideo />
    <AboutMain />
    <AlbumsMain />
    <VideosMain />
    <ConcertsMain />
  </main>
);

export default HomePage;
