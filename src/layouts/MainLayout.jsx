import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-poppins text-slate-900">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
