import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
