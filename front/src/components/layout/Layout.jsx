import MenuRoutes from "@/components/layout/navigation/MenuRoutes/MenuRoutes";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollTop from "./ScrollTop/ScrollTop";

const Layout = ({ children }) => (
  <>
    <Header />
    <MenuRoutes />
    {children}
    <ScrollTop />
    <Footer />
  </>
);

export default Layout;
