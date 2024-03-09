import { NextPage } from "next";
import NotFound from "@/components/screens/notFound/NotFound";
import { metadata } from "./layout";

metadata.title = "Not found";
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

const NotFoundPage: NextPage = () => (
  <main className="not-found-page">
    <NotFound />
  </main>
);

export default NotFoundPage;
