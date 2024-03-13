import { FC, ReactNode } from "react";

import Header from "./Header/Header";
import ScrollTop from "./navigation/ScrollTop/ScrollTop";
import Footer from "./Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <ScrollTop />
    <Footer />
  </>
);

export default Layout;
