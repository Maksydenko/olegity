import { NextPage } from "next";
import About from "@/components/screens/About/About";
import { metadata } from "../layout";

metadata.title = "About";
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

const AboutPage: NextPage = () => {
  return <About />;
};

export default AboutPage;
