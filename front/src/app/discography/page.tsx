import { NextPage } from "next";
import Discography from "@/components/screens/Discography/Discography";
import { metadata } from "../layout";

metadata.title = "Discography";
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

const DiscographyPage: NextPage = () => (
  <main className="discography-page">
    <Discography />
  </main>
);

export default DiscographyPage;
