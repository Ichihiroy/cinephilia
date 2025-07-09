import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const App = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Toaster />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
