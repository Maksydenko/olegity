import { Routes, Route } from "react-router-dom";

import PageNotFound from "@pages/PageNotFound/PageNotFound";
import Home from "@pages/Home/Home";
import About from "@pages/About/About";
import Discography from "@pages/Discography/Discography";
import Videos from "@pages/Videos/Videos";
import Concerts from "@pages/Concerts/Concerts";

import ScrollTop from "./ScrollTop";

function MenuRoutes() {
  return (
    <Routes>
      {ScrollTop()}
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/discography" element={<Discography />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/concerts" element={<Concerts />} />
    </Routes>
  );
}

export default MenuRoutes;
