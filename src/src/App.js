import Header from "@layout/Header/Header";
import Footer from "@layout/Footer/Footer";
import MenuRoutes from "@layout/navigation/MenuRoutes/MenuRoutes";

function App() {
  return (
    <div className="app">
      <Header />
      <MenuRoutes />
      <Footer />
    </div>
  );
}

export default App;
