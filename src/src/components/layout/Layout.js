import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollTop from "./ScrollTop/ScrollTop";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <ScrollTop />
    <Footer />
  </>
);

export default Layout;
