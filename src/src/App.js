import Layout from "@layout/Layout";
import MenuRoutes from "@layout/navigation/MenuRoutes/MenuRoutes";

const App = () => (
  <div className="app">
    <Layout>
      <MenuRoutes />
    </Layout>
  </div>
);

export default App;
