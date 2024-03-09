import { NextPage } from "next";
import Concerts from "@/components/screens/Concerts/Concerts";
import { metadata } from "../layout";

metadata.title = "Concerts";
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

const ConcertsPage: NextPage = () => (
  <main className="concerts-page">
    <Concerts />
  </main>
);

export default ConcertsPage;
