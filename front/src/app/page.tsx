import { NextPage } from "next";
import HomePage from "@/components/screens/Home/Home";
import { metadata } from "./layout";

metadata.title = "Home";
metadata.description = "";
metadata.description = "";
metadata.keywords = "";
metadata.robots = "";
metadata.copyright = "";
metadata.twitter.card = "";
metadata.twitter.title = "";
metadata.twitter.description = "";
metadata.openGraph.locale = "";
// metadata.openGraph.type = "";
metadata.openGraph.title = "";
metadata.openGraph.description = "";
metadata.openGraph.url = "";
metadata.openGraph.siteName = "";

const Home: NextPage = () => (
  <main className="home-page">
    <HomePage />
  </main>
);

export default Home;
