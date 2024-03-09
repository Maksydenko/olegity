import { NextPage } from "next";
import Videos from "@/components/screens/Videos/Videos";
import { metadata } from "../layout";

metadata.title = "Videos";
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

const VideosPage: NextPage = () => (
  <main className="videos-page">
    <Videos />
  </main>
);

export default VideosPage;
